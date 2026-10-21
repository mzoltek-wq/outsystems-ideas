import { Filter, RotateCcw } from "lucide-react";
import {
  type MetricLayer,
  type PhaseId,
  type SystemId,
  metricLayers,
  phases,
  systems,
} from "../data/buildItLiveFlow";

export type FlowFilters = {
  phase: "all" | PhaseId;
  system: "all" | SystemId;
  layer: "all" | MetricLayer;
};

type FiltersProps = {
  filters: FlowFilters;
  onChange: (filters: FlowFilters) => void;
};

export function Filters({ filters, onChange }: FiltersProps) {
  const update = <Key extends keyof FlowFilters>(key: Key, value: FlowFilters[Key]) => {
    onChange({ ...filters, [key]: value });
  };

  return (
    <section className="control-strip" aria-label="Flow filters">
      <div className="control-title">
        <Filter size={18} />
        <span>Filter operating model</span>
      </div>
      <label htmlFor="phase-filter">
        Phase
        <select id="phase-filter" value={filters.phase} onChange={(event) => update("phase", event.target.value as FlowFilters["phase"])}>
          <option value="all">All phases</option>
          {Object.entries(phases).map(([id, phase]) => (
            <option key={id} value={id}>
              {phase.label}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="system-filter">
        System
        <select id="system-filter" value={filters.system} onChange={(event) => update("system", event.target.value as FlowFilters["system"])}>
          <option value="all">All systems</option>
          {Object.entries(systems).map(([id, system]) => (
            <option key={id} value={id}>
              {system.label}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="layer-filter">
        Metric layer
        <select id="layer-filter" value={filters.layer} onChange={(event) => update("layer", event.target.value as FlowFilters["layer"])}>
          <option value="all">All layers</option>
          {Object.entries(metricLayers).map(([id, layer]) => (
            <option key={id} value={id}>
              {layer.label}
            </option>
          ))}
        </select>
      </label>
      <button className="reset-button" type="button" onClick={() => onChange({ phase: "all", system: "all", layer: "all" })}>
        <RotateCcw size={16} />
        Reset
      </button>
    </section>
  );
}
