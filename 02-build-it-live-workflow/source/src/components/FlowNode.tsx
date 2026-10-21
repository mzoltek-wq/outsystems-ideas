import { memo } from "react";
import { Handle, Position, type NodeProps } from "@xyflow/react";
import { ArrowUpRight, BarChart3, CheckCircle2, RadioTower } from "lucide-react";
import { type BuildNode, metricLayers, phases, systems } from "../data/buildItLiveFlow";

type FlowNodeData = BuildNode & {
  selected: boolean;
};

const layerIcon = {
  raw: BarChart3,
  known: RadioTower,
  campaign: CheckCircle2,
  business: ArrowUpRight,
};

export const FlowNode = memo(({ data }: NodeProps) => {
  const node = data as unknown as FlowNodeData;
  const phase = phases[node.phase];
  const primaryLayer = node.metricLayers[0];
  const Icon = layerIcon[primaryLayer];

  return (
    <button
      className={`flow-node ${node.selected ? "is-selected" : ""}`}
      style={{ "--phase": phase.color } as React.CSSProperties}
      type="button"
    >
      <Handle className="flow-handle" type="target" position={Position.Left} />
      <div className="flow-node__rail" />
      <div className="flow-node__body">
        <div className="flow-node__meta">
          <span>{phase.label}</span>
          <Icon size={14} />
        </div>
        <strong>{node.label}</strong>
        <div className="flow-node__systems">
          {node.systems.slice(0, 3).map((system) => (
            <span key={system}>{systems[system].label}</span>
          ))}
        </div>
        <div className="flow-node__layers">
          {node.metricLayers.map((layer) => (
            <i key={layer} title={metricLayers[layer].label} />
          ))}
        </div>
      </div>
      <Handle className="flow-handle" type="source" position={Position.Right} />
    </button>
  );
});
