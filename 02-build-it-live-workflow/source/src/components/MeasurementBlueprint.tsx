import { useState } from "react";
import { BarChart3, ClipboardList, Database, MousePointerClick, RadioTower, Search, TrendingUp } from "lucide-react";

const measurementStages = [
  {
    id: "registration",
    label: "Registration and demand capture",
    tag: "Data moment 1",
    icon: Search,
    status: "Measurable demand enters here",
    tone: "data",
    summary:
      "A visitor submits a request. We capture who they are, where they came from, what they want built, and whether the idea points to AI, integrations, or specific use cases.",
    path: ["Public form", "BIL backoffice", "Salesforce"],
    sections: [
      {
        title: "What we capture",
        items: ["Contact name", "Company", "Email", "Request source", "Use case", "AI layer", "External integrations"],
      },
      {
        title: "What happens in Salesforce",
        items: ["Create or update contact", "Associate to an account when possible", "Add to BIL campaign", "Preserve source context"],
      },
      {
        title: "Metrics to monitor",
        items: ["Submission volume", "Request source mix", "AI and integration demand", "Campaign member growth"],
      },
    ],
  },
  {
    id: "production",
    label: "Content planning and recording",
    tag: "Production zone",
    icon: ClipboardList,
    status: "Important work, not the main success metric",
    tone: "production",
    summary:
      "Selected requests become episode plans, recordings, clips, descriptions, and supporting assets. This is where the content is made, but it should be measured mostly as operational readiness.",
    path: ["Review request", "Plan episode", "Record and package"],
    sections: [
      {
        title: "What gets created",
        items: ["Episode plan", "Chapter outline", "Recording package", "Descriptions and tags", "Asset checklist"],
      },
      {
        title: "CRM role",
        items: ["No primary Salesforce action required", "Optional submitter notification", "Optional status note on campaign member"],
      },
      {
        title: "Track lightly",
        items: ["Planned", "Recorded", "Ready to post", "Needs follow-up"],
      },
    ],
  },
  {
    id: "distribution",
    label: "Posting, distribution, and analysis",
    tag: "Data moment 2",
    icon: RadioTower,
    status: "Published assets create measurable signals",
    tone: "data",
    summary:
      "Once the episode is live, every surface can be measured: video engagement, developer asset usage, site clicks, CTA activity, meetings, and eventual opportunity influence.",
    path: ["YouTube and social", "Episode page", "GitHub and Forge", "Analytics dashboard"],
    sections: [
      {
        title: "Outputs",
        items: ["Full episode", "Short clips", "Episode page", "GitHub repo", "Forge asset", "Demo app link"],
      },
      {
        title: "What we track",
        items: ["Views and watch time", "Clicks", "Downloads", "Site visits", "CTA clicks", "Meeting requests"],
      },
      {
        title: "Success signal",
        items: ["AEO and source traffic", "Resource engagement", "Meeting lift", "Campaign influence", "Opportunity influence"],
      },
    ],
  },
];

const successSignals = [
  { label: "Demand", value: "What people ask to build", icon: Search },
  { label: "Known context", value: "Who they are in Salesforce", icon: Database },
  { label: "Engagement", value: "What assets they use", icon: BarChart3 },
  { label: "Business impact", value: "CTAs, meetings, opportunities", icon: TrendingUp },
];

export function MeasurementBlueprint() {
  const [activeStageId, setActiveStageId] = useState(measurementStages[0].id);
  const activeStage = measurementStages.find((stage) => stage.id === activeStageId) ?? measurementStages[0];
  const ActiveIcon = activeStage.icon;

  return (
    <section className="measurement-panel" id="measurement-blueprint">
      <div className="measurement-header measurement-header--visual">
        <div>
          <span className="eyebrow">AEO and success measurement blueprint</span>
          <h2>Keep the measurement story focused on demand capture and content performance</h2>
          <p>
            The process has many workflow steps, but the measurement model can stay simple: capture registrant demand,
            produce the episode, then measure how the published assets drive AEO visibility, engagement, CTAs, meetings,
            and opportunity influence.
          </p>
        </div>
      </div>

      <div className="measurement-simple">
        <div className="measurement-simple-flow" aria-label="Simplified AEO measurement workflow">
          {measurementStages.map((stage, index) => {
            const Icon = stage.icon;
            return (
              <div className="measurement-flow-item" key={stage.id}>
                <button
                  className={`measurement-stage-card measurement-stage-card--${stage.tone} ${
                    stage.id === activeStage.id ? "active" : ""
                  }`}
                  onClick={() => setActiveStageId(stage.id)}
                  type="button"
                >
                  <span className="measurement-stage-tag">{stage.tag}</span>
                  <Icon size={25} />
                  <strong>{stage.label}</strong>
                  <em>{stage.status}</em>
                </button>
                {index < measurementStages.length - 1 ? <span className="measurement-connector" aria-hidden="true" /> : null}
              </div>
            );
          })}
        </div>

        <div className="measurement-simple-detail">
          <article className="measurement-detail-main">
            <div className="measurement-detail-title">
              <div>
                <ActiveIcon size={24} />
                <span>{activeStage.tag}</span>
              </div>
              <h3>{activeStage.label}</h3>
              <p>{activeStage.summary}</p>
            </div>

            <div className="measurement-path" aria-label="Selected stage path">
              {activeStage.path.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <div className="measurement-detail-grid">
              {activeStage.sections.map((section) => (
                <InfoList key={section.title} title={section.title} items={section.items} />
              ))}
            </div>
          </article>

          <aside className="measurement-success-strip" aria-label="Success signals">
            <div className="measurement-success-title">
              <MousePointerClick size={21} />
              <span>What success means</span>
            </div>
            {successSignals.map((signal) => {
              const Icon = signal.icon;
              return (
                <div className="measurement-success-item" key={signal.label}>
                  <Icon size={18} />
                  <span>{signal.label}</span>
                  <strong>{signal.value}</strong>
                </div>
              );
            })}
          </aside>
        </div>
      </div>
    </section>
  );
}

function InfoList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="measurement-list-card">
      <span>{title}</span>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
