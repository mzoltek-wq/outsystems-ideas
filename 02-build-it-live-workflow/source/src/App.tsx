import { type FormEvent, useEffect, useMemo, useState } from "react";
import {
  Background,
  BackgroundVariant,
  Controls,
  MarkerType,
  ReactFlow,
  type Edge,
  type Node,
} from "@xyflow/react";
import { DetailDrawer } from "./components/DetailDrawer";
import { type FlowFilters, Filters } from "./components/Filters";
import { FlowNode } from "./components/FlowNode";
import { Legend } from "./components/Legend";
import { MeasurementBlueprint } from "./components/MeasurementBlueprint";
import { SimulationLab } from "./components/SimulationLab";
import { campaignModel, edges, nodes } from "./data/buildItLiveFlow";

const nodeTypes = { buildNode: FlowNode };
const ACCESS_PASSWORD = "SA@Scale@SA";
const ACCESS_STORAGE_KEY = "bil-workflow-access";

export function App() {
  const [isUnlocked, setIsUnlocked] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return window.sessionStorage.getItem(ACCESS_STORAGE_KEY) === "granted";
  });
  const [passwordInput, setPasswordInput] = useState("");
  const [accessError, setAccessError] = useState("");
  const [selectedNodeId, setSelectedNodeId] = useState(nodes[0].id);
  const [filters, setFilters] = useState<FlowFilters>({ phase: "all", system: "all", layer: "all" });

  const visibleNodeIds = useMemo(() => {
    return new Set(
      nodes
        .filter((node) => filters.phase === "all" || node.phase === filters.phase)
        .filter((node) => filters.system === "all" || node.systems.includes(filters.system))
        .filter((node) => filters.layer === "all" || node.metricLayers.includes(filters.layer))
        .map((node) => node.id),
    );
  }, [filters]);

  const flowNodes = useMemo<Node[]>(() => {
    return nodes.map((node) => {
      const visible = visibleNodeIds.has(node.id);

      return {
        id: node.id,
        type: "buildNode",
        position: node.position,
        data: {
          ...node,
          selected: selectedNodeId === node.id,
        },
        hidden: !visible,
      };
    });
  }, [selectedNodeId, visibleNodeIds]);

  useEffect(() => {
    if (selectedNodeId && visibleNodeIds.has(selectedNodeId)) {
      return;
    }

    const nextVisibleNode = nodes.find((node) => visibleNodeIds.has(node.id));
    setSelectedNodeId(nextVisibleNode?.id ?? "");
  }, [selectedNodeId, visibleNodeIds]);

  useEffect(() => {
    if (!isUnlocked || typeof window === "undefined" || !window.location.hash) {
      return;
    }

    window.requestAnimationFrame(() => {
      document.getElementById(window.location.hash.slice(1))?.scrollIntoView({ block: "start" });
    });
  }, [isUnlocked]);

  const flowEdges = useMemo<Edge[]>(() => {
    return edges.map((edge) => ({
      ...edge,
      type: "smoothstep",
      animated: edge.target === selectedNodeId || edge.source === selectedNodeId,
      hidden: !visibleNodeIds.has(edge.source) || !visibleNodeIds.has(edge.target),
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 18,
        height: 18,
        color: edge.source === selectedNodeId ? "#e60028" : "#a3a3a3",
      },
      style: {
        stroke: edge.source === selectedNodeId ? "#e60028" : "#bdbdbd",
        strokeWidth: edge.source === selectedNodeId ? 2.8 : 1.6,
      },
      labelStyle: {
        fill: "#1f1f1f",
        fontWeight: 700,
        fontSize: 11,
      },
      labelBgStyle: {
        fill: "#ffffff",
        fillOpacity: 0.92,
      },
    }));
  }, [selectedNodeId, visibleNodeIds]);

  const selectedNode = nodes.find((node) => node.id === selectedNodeId) ?? null;
  const visibleCount = visibleNodeIds.size;

  const handleAccessSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (passwordInput === ACCESS_PASSWORD) {
      window.sessionStorage.setItem(ACCESS_STORAGE_KEY, "granted");
      setAccessError("");
      setIsUnlocked(true);
      return;
    }

    setAccessError("That password did not match.");
    setPasswordInput("");
  };

  if (!isUnlocked) {
    return (
      <main className="access-shell">
        <section className="access-card" aria-labelledby="access-title">
          <div className="access-brand">
            <div className="brand-mark">
              <span>OS</span>
            </div>
            <strong>Build It Live</strong>
          </div>
          <span className="eyebrow">Private workflow preview</span>
          <h1 id="access-title">Enter the access password</h1>
          <p>This preview is lightly gated while the Build It Live workflow is being shaped for leadership review.</p>
          <form className="access-form" onSubmit={handleAccessSubmit}>
            <label htmlFor="access-password">Password</label>
            <input
              autoFocus
              id="access-password"
              onChange={(event) => {
                setPasswordInput(event.target.value);
                setAccessError("");
              }}
              type="password"
              value={passwordInput}
            />
            {accessError ? <span className="access-error">{accessError}</span> : null}
            <button type="submit">Enter</button>
          </form>
        </section>
      </main>
    );
  }

  return (
    <main className="app-shell">
      <header className="hero">
        <div className="brand-bar" aria-label="Build It Live">
          <div className="brand-mark">
            <span>OS</span>
          </div>
          <strong>Build It Live</strong>
        </div>

        <section className="hero-grid hero-grid--intro">
          <div className="hero-copy">
            <span className="eyebrow">SA@Scale operating model</span>
            <h1>Create a simu-live web series powered by user requests, where every episode drives AEO, platform awareness, and higher-intent CTAs.</h1>
            <p>
              Capture build demand, turn the best ideas into reusable technical content, distribute the outputs across video and
              developer channels, and connect engagement back to Salesforce and opportunity influence.
            </p>
          </div>
        </section>
      </header>

      <SimulationLab />

      <MeasurementBlueprint />

      <Filters filters={filters} onChange={setFilters} />

      <section className="workspace" id="workflow-map">
        <div className="flow-card">
          <div className="flow-card__header">
            <div>
              <span className="eyebrow">Detailed workflow map</span>
              <h2>Seven-step process inputs, outputs, and attribution</h2>
            </div>
            <div className="flow-count">{visibleCount} visible nodes</div>
          </div>

          <div className="flow-canvas">
            <ReactFlow
              nodes={flowNodes}
              edges={flowEdges}
              nodeTypes={nodeTypes}
              onNodeClick={(_, node) => setSelectedNodeId(node.id)}
              fitView
              fitViewOptions={{ padding: 0.2, minZoom: 0.18, maxZoom: 0.85 }}
              minZoom={0.1}
              maxZoom={1.2}
              proOptions={{ hideAttribution: true }}
            >
              <Background color="#dadada" gap={20} size={1} variant={BackgroundVariant.Dots} />
              <Controls showInteractive={false} />
            </ReactFlow>
          </div>
        </div>

        <DetailDrawer node={selectedNode} onClose={() => setSelectedNodeId("")} />
      </section>

      <section className="lower-grid">
        <Legend />
        <section className="campaign-panel">
          <div>
            <span className="eyebrow">Attribution model</span>
            <h2>Campaign hierarchy and tracked-link approach</h2>
            <p>
              Use UTM parameters and tracked redirects so requests, YouTube views, TikTok and LinkedIn clicks, GitHub visits,
              Forge downloads, episode-page CTAs, and meeting bookings attribute back to the right episode, source, campaign,
              and person where known.
            </p>
          </div>
          <div className="campaign-layout">
            <div>
              <h3>Recommended hierarchy</h3>
              <ol className="hierarchy">
                {campaignModel.hierarchy.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </div>
            <div>
              <h3>Member statuses</h3>
              <div className="status-cloud">
                {campaignModel.statuses.map((status) => (
                  <span key={status}>{status}</span>
                ))}
              </div>
            </div>
            <div>
              <h3>Tracked links</h3>
              <div className="tracked-links">
                {campaignModel.links.map((link) => (
                  <code key={link}>{link}</code>
                ))}
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
