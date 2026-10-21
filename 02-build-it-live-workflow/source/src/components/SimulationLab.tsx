import { useEffect, useState } from "react";
import {
  BarChart3,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Database,
  FileVideo,
  Mail,
  Play,
  Send,
} from "lucide-react";
import { prefilledSubmission, simulationSteps } from "../data/simulation";

const statusByStep: Record<string, string> = {
  submit: "Submitted",
  notify: "Team notified",
  "salesforce-person": "Salesforce updated",
  backoffice: "Episode candidate",
  plan: "Episode planned",
  "episode-output": "Outputs live",
  analytics: "Metrics tracked",
};

export function SimulationLab() {
  const [activeStep, setActiveStep] = useState(getInitialStepIndex);
  const currentStep = simulationSteps[activeStep];
  const activeStatus = statusByStep[currentStep.id];

  useEffect(() => {
    const handleHashChange = () => {
      setActiveStep(getInitialStepIndex());
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const goToStep = (index: number) => {
    const nextIndex = Math.max(0, Math.min(index, simulationSteps.length - 1));
    setActiveStep(nextIndex);

    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", `#${simulationSteps[nextIndex].id}`);
    }
  };

  const previous = () => {
    goToStep(activeStep - 1);
  };

  const next = () => {
    goToStep(activeStep + 1);
  };

  return (
    <section className="simulation-panel" id="simulation">
      <div className="simulation-header simulation-header--simple">
        <div>
          <span className="eyebrow">Leadership workflow mockup</span>
          <h2>Request submission to published, measurable Build It Live content</h2>
          <p>
            A simplified operating view for leadership: capture the request, notify the team, connect it to Salesforce,
            manage it in the backoffice, plan the episode, create the outputs, and track performance.
          </p>
        </div>
      </div>

      <div className="simulation-two-column">
        <StepPreview stepId={currentStep.id} />

        <section className="workflow-player" aria-label="Workflow step player">
          <div className="player-frame">
            <div className="player-header">
              <span>Workflow step {activeStep + 1} of {simulationSteps.length}</span>
              <strong>{activeStatus}</strong>
            </div>

            <div className="player-step">
              <button
                className="step-arrow"
                type="button"
                onClick={previous}
                disabled={activeStep === 0}
                aria-label="Go to previous workflow step"
              >
                <ChevronLeft size={26} />
              </button>

              <article className="active-step-card">
                <span>{currentStep.system}</span>
                <h3>{currentStep.label}</h3>
                <div className="step-what-happens">
                  <small>What happens here</small>
                </div>
                <p>{currentStep.description}</p>
                {currentStep.outcome ? (
                  <div className="step-outcome">
                    <CheckCircle2 size={18} />
                    <strong>{currentStep.outcome}</strong>
                  </div>
                ) : null}
              </article>

              <button
                className="step-arrow"
                type="button"
                onClick={next}
                disabled={activeStep === simulationSteps.length - 1}
                aria-label="Go to next workflow step"
              >
                <ChevronRight size={26} />
              </button>
            </div>

            <div className="step-progress" aria-label="Workflow progress">
              {simulationSteps.map((step, index) => (
                <button
                  className={index === activeStep ? "active" : index < activeStep ? "done" : ""}
                  key={step.id}
                  type="button"
                  onClick={() => goToStep(index)}
                  aria-label={`Go to ${step.label}`}
                />
              ))}
            </div>

            <section className="step-detail-panel">
              <StepDetails step={currentStep} />
            </section>
          </div>
        </section>
      </div>
    </section>
  );
}

function getInitialStepIndex() {
  if (typeof window === "undefined") {
    return 0;
  }

  const stepId = window.location.hash.replace("#", "");
  const index = simulationSteps.findIndex((step) => step.id === stepId);
  return index >= 0 ? index : 0;
}

function MockField({ label, value }: { label: string; value: string }) {
  return (
    <label className="mock-field">
      {label}
      <input readOnly value={value} />
    </label>
  );
}

function StepPreview({ stepId }: { stepId: string }) {
  if (stepId === "submit") {
    return <SubmissionPreview />;
  }

  if (stepId === "notify") {
    return (
      <MockScreen title="Team Email" subtitle="Notification sent" icon={<Mail size={19} />}>
        <div className="email-card">
          <span>To: build-it-live-core@company.com</span>
          <h3>New Build It Live request: {prefilledSubmission.submissionTitle}</h3>
          <p>{prefilledSubmission.requestDescription}</p>
          <button type="button">Open in backoffice</button>
        </div>
      </MockScreen>
    );
  }

  if (stepId === "salesforce-person") {
    return (
      <MockScreen title="Salesforce" subtitle="Contact and campaign update" icon={<Database size={19} />}>
        <div className="sf-record">
          <span>CONTACT</span>
          <h3>{prefilledSubmission.requesterName}</h3>
          <p>{prefilledSubmission.requesterTitle} · {prefilledSubmission.requesterCompany}</p>
          <div className="field-grid">
            <PreviewField label="Email" value={prefilledSubmission.requesterEmail} />
            <PreviewField label="Contact status" value="Created or updated from Build It Live request" />
            <PreviewField label="Campaign" value="Build It Live FY26" />
            <PreviewField label="Campaign status" value="Requested Build" />
          </div>
        </div>
      </MockScreen>
    );
  }

  if (stepId === "backoffice") {
    return (
      <MockScreen
        title="Backoffice"
        subtitle="Request management"
        icon={<ClipboardList size={19} />}
      >
        <div className="backoffice-mock-record">
          <span>BIL-001</span>
          <h3>{prefilledSubmission.submissionTitle}</h3>
          <p>{prefilledSubmission.requesterCompany} · {prefilledSubmission.requesterName}</p>
          <div className="tag-cloud">
            <em>Agentic AI</em>
            <em>Financial Services</em>
            <em>High Reuse</em>
          </div>
          <div className="approval-row">
            <button type="button">Plan episode</button>
            <button type="button" className="ghost">Save for later</button>
          </div>
        </div>
      </MockScreen>
    );
  }

  if (stepId === "plan") {
    return (
      <MockScreen
        title="Episode Plan"
        subtitle="Production planning"
        icon={<FileVideo size={19} />}
      >
        <div className="content-board">
          <PreviewField label="Chapter layout" value="Intro, build walkthrough, AI layer, integrations, recap" />
          <PreviewField label="Expected outputs" value="Full episode, short clips, descriptions, tags, developer assets" />
          <PreviewField label="Integrations" value="Confirm systems, credentials, sample data, and demo-safe access" />
          <PreviewField label="Production status" value="Practice runs complete; ready for simulive recording" />
        </div>
      </MockScreen>
    );
  }

  if (stepId === "episode-output") {
    return (
      <MockScreen title="Output Package" subtitle="Recording and posting" icon={<Play size={19} />}>
        <div className="episode-page-preview">
          <div className="video-thumb">
            <Play size={34} />
          </div>
          <h3>AI-assisted loan application intake</h3>
          <p>One episode becomes a distributed package across video channels, developer destinations, and public content surfaces.</p>
          <div className="link-list">
            <span>YouTube</span>
            <span>TikTok</span>
            <span>LinkedIn</span>
            <span>GitHub README</span>
            <span>Forge component</span>
            <span>Demo app URL</span>
          </div>
          <div className="tag-cloud">
            <em>Videos live</em>
            <em>Developer assets live</em>
            <em>AEO ready</em>
          </div>
        </div>
      </MockScreen>
    );
  }

  if (stepId === "analytics") {
    return (
      <MockScreen title="Analytics Dashboard" subtitle="Monitoring engine" icon={<BarChart3 size={19} />}>
        <div className="analytics-grid">
          <Metric label="Views" value="8.4k" />
          <Metric label="Downloads" value="612" />
          <Metric label="Meetings" value="14" />
          <Metric label="Opp impact" value="$1.8M" />
        </div>
        <div className="chart-bars">
          <span style={{ height: "42%" }} />
          <span style={{ height: "72%" }} />
          <span style={{ height: "58%" }} />
          <span style={{ height: "86%" }} />
          <span style={{ height: "64%" }} />
        </div>
      </MockScreen>
    );
  }

  return (
    <MockScreen title="Analytics" subtitle="Performance tracking" icon={<BarChart3 size={19} />}>
      <div className="analytics-grid">
        <Metric label="Meetings" value="14" />
        <Metric label="Requests" value="23" />
        <Metric label="Opps influenced" value="7" />
        <Metric label="Pipeline" value="$1.8M" />
      </div>
      <div className="chart-bars">
        <span style={{ height: "34%" }} />
        <span style={{ height: "48%" }} />
        <span style={{ height: "70%" }} />
        <span style={{ height: "82%" }} />
        <span style={{ height: "92%" }} />
      </div>
    </MockScreen>
  );
}

function StepDetails({ step }: { step: (typeof simulationSteps)[number] }) {
  return (
    <div className="detail-section-grid detail-section-grid--trimmed">
      <DetailList title="Key Data Captured" items={step.detailItems} />
      <DetailList title="Metrics to be tracked" items={step.metricsTracked} />
      <DetailList title="Outputs" items={step.outputs} />
    </div>
  );
}

function DetailList({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="detail-list">
      <h5>{title}</h5>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

function SubmissionPreview() {
  return (
    <section className="submission-form-preview" aria-label="Submitted request form">
      <div className="mock-toolbar">
        <span />
        <strong>SubmissionForm</strong>
      </div>
      <div className="mock-form">
        <h3>Submitted request</h3>
        <MockField label="Submission Title *" value={prefilledSubmission.submissionTitle} />
        <MockField label="Submission Type" value={prefilledSubmission.submissionType} />
        <label className="mock-field mock-field--area">
          Describe the request (be descriptive!)
          <textarea readOnly value={prefilledSubmission.requestDescription} />
        </label>
        <MockField label="Is there an Agentic Layer to this?" value={prefilledSubmission.hasAgenticLayer} />
        <label className="mock-field mock-field--area">
          AI Details
          <textarea readOnly value={prefilledSubmission.aiDetails} />
        </label>
        <MockField label="Are there any External Integrations?" value={prefilledSubmission.hasExternalIntegrations} />
        <MockField label="Your Name" value={prefilledSubmission.requesterName} />
        <MockField label="Your Email" value={prefilledSubmission.requesterEmail} />
        <MockField label="Your Company" value={prefilledSubmission.requesterCompany} />
        <MockField label="Your Title" value={prefilledSubmission.requesterTitle} />
        <label className="mock-field">
          How did you get to this page?
          <select disabled value={prefilledSubmission.requestSource} aria-label="How did you get to this page?">
            <option>AI Prompt</option>
            <option>Google</option>
            <option>LinkedIn</option>
            <option>OutSystems Website</option>
            <option>Other</option>
          </select>
        </label>
        <button className="submit-preview" type="button">
          <Send size={16} />
          Submitted
        </button>
      </div>
    </section>
  );
}

function MockScreen({ title, subtitle, icon, children }: { title: string; subtitle: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <section className="dynamic-preview" aria-label={`${title} preview`}>
      <div className="preview-topbar">
        <div>
          <span>{subtitle}</span>
          <strong>{title}</strong>
        </div>
        {icon}
      </div>
      <div className="preview-body">{children}</div>
    </section>
  );
}

function PreviewField({ label, value }: { label: string; value: string }) {
  return (
    <div className="preview-field">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="metric-tile">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}
