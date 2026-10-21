import { ArrowRight, BarChart3, CheckCircle2, RadioTower, TrendingUp } from "lucide-react";
import { metricLayers, phases } from "../data/buildItLiveFlow";

const icons = {
  raw: BarChart3,
  known: RadioTower,
  campaign: CheckCircle2,
  business: TrendingUp,
};

export function Legend() {
  return (
    <aside className="legend-panel">
      <div className="legend-section">
        <h3>Metric Layers</h3>
        {Object.entries(metricLayers).map(([id, layer]) => {
          const Icon = icons[id as keyof typeof icons];
          return (
            <div className="legend-row" key={id}>
              <Icon size={17} />
              <div>
                <strong>{layer.label}</strong>
                <p>{layer.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="legend-section">
        <h3>Phases</h3>
        <div className="phase-grid">
          {Object.entries(phases).map(([id, phase]) => (
            <span key={id}>
              <i style={{ background: phase.color }} />
              {phase.label}
            </span>
          ))}
        </div>
      </div>
      <div className="legend-note">
        <ArrowRight size={16} />
        <span>Edges show the preferred operating path from request submission through AEO outputs, CTA attribution, and opportunity influence.</span>
      </div>
    </aside>
  );
}
