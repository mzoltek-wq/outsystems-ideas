import { Activity, Building2, CircleDollarSign, Layers3, UserRound, X } from "lucide-react";
import {
  type BuildNode,
  campaignModel,
  metricLayers,
  phases,
  systems,
} from "../data/buildItLiveFlow";

type DetailDrawerProps = {
  node: BuildNode | null;
  onClose: () => void;
};

export function DetailDrawer({ node, onClose }: DetailDrawerProps) {
  if (!node) {
    return (
      <aside className="detail-drawer detail-drawer--empty">
        <div>
          <span className="eyebrow">Operating model</span>
          <h2>Select a node</h2>
          <p>Click any step in the detailed map to inspect inputs, outputs, metrics, ownership, and Salesforce attribution behavior.</p>
        </div>
      </aside>
    );
  }

  const phase = phases[node.phase];

  return (
    <aside className="detail-drawer" style={{ "--phase": phase.color } as React.CSSProperties}>
      <div className="drawer-topline" />
      <button className="icon-button drawer-close" type="button" onClick={onClose} aria-label="Close details">
        <X size={18} />
      </button>
      <span className="eyebrow">{phase.label}</span>
      <h2>{node.label}</h2>
      <p className="drawer-purpose">{node.purpose}</p>

      <div className="drawer-stat-grid">
        <div>
          <UserRound size={16} />
          <span>Owner</span>
          <strong>{node.owner}</strong>
        </div>
        <div>
          <Building2 size={16} />
          <span>Systems</span>
          <strong>{node.systems.map((system) => systems[system].label).join(", ")}</strong>
        </div>
      </div>

      <DetailSection title="Inputs" items={node.inputs} />
      <DetailSection title="Outputs" items={node.outputs} />
      <DetailSection title="Metrics Tracked" items={node.metrics} icon={<Activity size={16} />} />

      <section className="drawer-section">
        <div className="section-title">
          <Layers3 size={16} />
          <h3>Metric Layers</h3>
        </div>
        <div className="drawer-pills">
          {node.metricLayers.map((layer) => (
            <span key={layer}>{metricLayers[layer].label.replace("Layer ", "L")}</span>
          ))}
        </div>
      </section>

      <section className="drawer-section salesforce-card">
        <div className="section-title">
          <CircleDollarSign size={16} />
          <h3>Salesforce Behavior</h3>
        </div>
        <p>{node.salesforceBehavior ?? "No direct Salesforce behavior at this stage; the step may still support upstream attribution or later reporting."}</p>
      </section>

      <section className="drawer-section">
        <h3>Campaign Fields</h3>
        <div className="field-cloud">
          {campaignModel.fields.slice(0, 8).map((field) => (
            <code key={field}>{field}</code>
          ))}
        </div>
      </section>
    </aside>
  );
}

function DetailSection({ title, items, icon }: { title: string; items: string[]; icon?: React.ReactNode }) {
  return (
    <section className="drawer-section">
      <div className="section-title">
        {icon}
        <h3>{title}</h3>
      </div>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
