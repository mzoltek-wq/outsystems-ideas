export type MetricLayer = "raw" | "known" | "campaign" | "business";
export type PhaseId =
  | "request"
  | "notification"
  | "salesforce"
  | "backoffice"
  | "planning"
  | "distribution"
  | "analytics";

export type SystemId =
  | "intake"
  | "email"
  | "backoffice"
  | "content"
  | "youtube"
  | "shorts"
  | "github"
  | "forge"
  | "website"
  | "analytics"
  | "salesforce"
  | "sales";

export type BuildNode = {
  id: string;
  label: string;
  phase: PhaseId;
  systems: SystemId[];
  metricLayers: MetricLayer[];
  owner: string;
  purpose: string;
  inputs: string[];
  outputs: string[];
  metrics: string[];
  salesforceBehavior?: string;
  position: { x: number; y: number };
};

export type BuildEdge = {
  id: string;
  source: string;
  target: string;
  label?: string;
};

export const phases: Record<PhaseId, { label: string; color: string; description: string }> = {
  request: {
    label: "1. Request Submission",
    color: "#2563eb",
    description: "Capture user-submitted build ideas, contact context, and request source attribution",
  },
  notification: {
    label: "2. Email Notification",
    color: "#db2777",
    description: "Notify the team and requester while validating that the submission looks real",
  },
  salesforce: {
    label: "3. Salesforce Update",
    color: "#059669",
    description: "Create or update the person record and connect the requester to a Build It Live campaign",
  },
  backoffice: {
    label: "4. Backoffice Management",
    color: "#7c3aed",
    description: "Review requests, tag them, prioritize them, and select episode candidates",
  },
  planning: {
    label: "5. Episode Planning",
    color: "#0891b2",
    description: "Map the episode, run of show, CTA plan, tracking plan, and asset checklist before production",
  },
  distribution: {
    label: "6. Recording and Distribution",
    color: "#ea580c",
    description: "Record the episode and publish video, developer, website, and AEO-ready outputs",
  },
  analytics: {
    label: "7. Analytics and Influence",
    color: "#b91c1c",
    description: "Monitor performance, CTA volume, meeting attribution, and opportunity influence",
  },
};

export const metricLayers: Record<MetricLayer, { label: string; description: string; examples: string[] }> = {
  raw: {
    label: "Layer 1: Aggregate content metrics",
    description: "Anonymous or aggregate performance signals from content, developer, and website platforms",
    examples: [
      "YouTube views, watch time, likes, comments, and subscribers",
      "TikTok and LinkedIn views, completion, saves, and shares",
      "GitHub views, stars, forks, clones, and README engagement",
      "Forge views, downloads, installs, ratings, and reviews",
      "Website visits, CTA clicks, and resource clicks",
    ],
  },
  known: {
    label: "Layer 2: Request and known-person signals",
    description: "Identity-bearing actions that can support follow-up and attribution",
    examples: [
      "Build request submitted",
      "Email delivered or bounced",
      "Meeting booked",
      "Question submitted",
      "Tracked resource clicked",
    ],
  },
  campaign: {
    label: "Layer 3: Salesforce attribution",
    description: "Campaign member records that connect source, episode, person, and account activity",
    examples: [
      "Create or update Lead/Contact",
      "Add person to Build It Live campaign",
      "Update Campaign Member Status",
      "Preserve request source and episode attribution",
      "Associate campaign influence to opportunities",
    ],
  },
  business: {
    label: "Layer 4: CTA and opportunity influence",
    description: "Outcome signals showing whether content increased meetings, conversations, and pipeline influence",
    examples: [
      "Episode-specific meetings booked",
      "Technical conversations created",
      "Opportunities created",
      "Opportunities influenced",
      "Pipeline or closed-won influence",
    ],
  },
};

export const systems: Record<SystemId, { label: string }> = {
  intake: { label: "Request Form" },
  email: { label: "Email" },
  backoffice: { label: "Backoffice" },
  content: { label: "Content Ops" },
  youtube: { label: "YouTube" },
  shorts: { label: "TikTok / LinkedIn" },
  github: { label: "GitHub" },
  forge: { label: "Forge" },
  website: { label: "Website" },
  analytics: { label: "Analytics" },
  salesforce: { label: "Salesforce" },
  sales: { label: "SA@Scale / Sales" },
};

const requestMetrics = ["total submissions", "AI-based submissions", "external integration types", "use cases", "request source"];
const contentMetrics = ["videos published", "developer assets published", "AEO-ready outputs", "content tags", "published URLs"];
const platformMetrics = ["views", "downloads", "clicks", "likes", "site visits", "subscribers"];
const businessMetrics = ["CTA meetings", "episode-specific meeting attribution", "opportunities created", "opportunities influenced"];

export const nodes: BuildNode[] = [
  {
    id: "public-request-form",
    label: "Public Request Form Submitted",
    phase: "request",
    systems: ["intake", "website"],
    metricLayers: ["known"],
    owner: "Requester",
    purpose: "Capture a build idea from an internal employee or external visitor without requiring login",
    inputs: ["Build idea", "AI layer details", "External integration details", "Contact information"],
    outputs: ["Request ID", "Timestamp", "Submission record", "Requester profile"],
    metrics: requestMetrics,
    salesforceBehavior: "Submitter may become a Salesforce contact once identity is matched or created",
    position: { x: 0, y: 120 },
  },
  {
    id: "source-attribution",
    label: "Request Source Captured",
    phase: "request",
    systems: ["intake", "website", "analytics"],
    metricLayers: ["known", "raw"],
    owner: "Growth + Analytics",
    purpose: "Understand how the requester found the form so AEO, search, social, and campaign sources can be compared",
    inputs: ["Request ID", "Referrer", "UTM parameters", "Optional source dropdown"],
    outputs: ["Request source", "Referrer/source fields", "AEO or search signal", "Channel attribution"],
    metrics: ["request source", "source mix", "AI prompt source", "Google source", "LinkedIn source"],
    salesforceBehavior: "Source fields can be preserved when the person is created or updated in Salesforce",
    position: { x: 310, y: 120 },
  },
  {
    id: "team-email",
    label: "Team and Requester Email Sent",
    phase: "notification",
    systems: ["email", "backoffice"],
    metricLayers: ["known"],
    owner: "Automation",
    purpose: "Notify the internal team and confirm receipt with the requester while linking both sides back to the request",
    inputs: ["Submission record", "Requester email", "Request summary", "Backoffice link"],
    outputs: ["Internal team notification", "Submitter confirmation email", "Backoffice record link"],
    metrics: ["emails sent", "delivery status", "email bounces", "submission validity"],
    salesforceBehavior: "Email delivery and bounce signals can help validate whether the contact is usable",
    position: { x: 620, y: 35 },
  },
  {
    id: "email-validation",
    label: "Submission Validity Checked",
    phase: "notification",
    systems: ["email", "backoffice"],
    metricLayers: ["known"],
    owner: "Automation + Reviewer",
    purpose: "Separate useful requests from spam or invalid submissions before deeper review",
    inputs: ["Email delivery result", "Request details", "Submitter identity", "Spam indicators"],
    outputs: ["Valid submission signal", "Spam flag", "Review-ready request"],
    metrics: ["valid submissions", "bounced emails", "spam flags", "review-ready requests"],
    salesforceBehavior: "Only valid external requesters should move forward into person and campaign updates",
    position: { x: 620, y: 220 },
  },
  {
    id: "salesforce-contact",
    label: "Contact Created or Updated",
    phase: "salesforce",
    systems: ["salesforce", "backoffice"],
    metricLayers: ["known", "campaign"],
    owner: "RevOps Automation",
    purpose: "Create the requester as a Salesforce contact if needed or update the existing record with current information",
    inputs: ["Validated email", "Contact name", "Company", "Title", "Request source"],
    outputs: ["Salesforce contact", "Updated company/contact fields", "Matched account signal"],
    metrics: ["contacts created", "contacts updated", "matched accounts", "unmatched requesters"],
    salesforceBehavior: "Create or update Lead/Contact and retain source attribution from the request",
    position: { x: 930, y: 120 },
  },
  {
    id: "campaign-member",
    label: "Build It Live Campaign Member Added",
    phase: "salesforce",
    systems: ["salesforce"],
    metricLayers: ["campaign"],
    owner: "RevOps Automation",
    purpose: "Tie the requester to the Build It Live campaign so future engagement can be tracked by person and episode",
    inputs: ["Salesforce contact", "Campaign ID", "Request ID", "Source attribution"],
    outputs: ["Campaign member", "Requested Build status", "Episode/source attribution"],
    metrics: ["campaign signups", "campaign member status", "free environment activity"],
    salesforceBehavior: "Add the person to Build It Live campaign with Requested Build status",
    position: { x: 1240, y: 120 },
  },
  {
    id: "backoffice-record",
    label: "Backoffice Record Created",
    phase: "backoffice",
    systems: ["backoffice", "intake"],
    metricLayers: ["known"],
    owner: "Build It Live Admin",
    purpose: "Store the request in the operating repository so the team can review, tag, prioritize, and track status",
    inputs: ["Submission record", "Salesforce match", "Email validation signal", "Request source"],
    outputs: ["Backoffice request record", "New status", "Review queue item"],
    metrics: ["new requests", "queue size", "time in status"],
    salesforceBehavior: "Backoffice record keeps the Salesforce contact and campaign references available for later reporting",
    position: { x: 1550, y: 120 },
  },
  {
    id: "review-tag-prioritize",
    label: "Request Reviewed, Tagged, and Prioritized",
    phase: "backoffice",
    systems: ["backoffice", "content", "sales"],
    metricLayers: ["known"],
    owner: "Program Lead + Review Team",
    purpose: "Decide whether the request is useful, combine related ideas, and enrich the record for planning",
    inputs: ["Backoffice request", "Organization context", "Industry/use-case knowledge", "Integration details"],
    outputs: ["Request tags", "Priority", "Status", "Cleaned description"],
    metrics: ["requests reviewed", "requests approved", "requests deferred", "requests dismissed as spam"],
    salesforceBehavior: "Selected or deferred outcomes can be written back as campaign notes or member status context",
    position: { x: 1860, y: 120 },
  },
  {
    id: "episode-candidate",
    label: "Episode Candidate Selected",
    phase: "backoffice",
    systems: ["backoffice", "email", "content"],
    metricLayers: ["known"],
    owner: "Program Lead",
    purpose: "Move strong requests into the production path and notify the requester when their idea is selected",
    inputs: ["Reviewed request", "Priority", "Tags", "Production capacity"],
    outputs: ["Episode candidate", "Submitter notification", "Episode details"],
    metrics: ["approved requests", "combined requests", "deferred ideas saved for later"],
    salesforceBehavior: "Campaign member can move from Requested Build to Selected or Follow-up Needed once the idea is chosen",
    position: { x: 2170, y: 120 },
  },
  {
    id: "episode-plan",
    label: "Episode Plan Created",
    phase: "planning",
    systems: ["content", "backoffice"],
    metricLayers: ["known"],
    owner: "Producer + Solution Architect",
    purpose: "Map the full episode before production so the recording has a clear story, scope, and output plan",
    inputs: ["Episode candidate", "Cleaned description", "Technical scope", "Target audience"],
    outputs: ["Episode plan", "Chapter layout", "Video descriptions", "Content tags"],
    metrics: ["plans created", "planning cycle time", "production readiness"],
    salesforceBehavior: "Episode plan can create or update an episode-level campaign record for future attribution",
    position: { x: 2480, y: 20 },
  },
  {
    id: "run-of-show",
    label: "Run of Show and Practice Runs",
    phase: "planning",
    systems: ["content", "sales"],
    metricLayers: ["known"],
    owner: "Producer + Host",
    purpose: "Prepare the flow for a live-style recording that can be presented as simu-live",
    inputs: ["Episode plan", "Demo flow", "Talking points", "Practice feedback"],
    outputs: ["Run of show", "Demo sequence", "Recording checklist"],
    metrics: ["practice runs completed", "recording readiness", "chapter coverage"],
    salesforceBehavior: "No direct Salesforce update; this protects quality before the episode becomes measurable content",
    position: { x: 2480, y: 205 },
  },
  {
    id: "tracking-cta-plan",
    label: "Tracking and CTA Plan Finalized",
    phase: "planning",
    systems: ["analytics", "website", "salesforce"],
    metricLayers: ["raw", "known", "campaign"],
    owner: "Growth + RevOps",
    purpose: "Define how every output will be measured and which CTAs should create known-person engagement",
    inputs: ["Episode plan", "Channel list", "Tracking requirements", "CTA strategy"],
    outputs: ["Tracking plan", "CTA plan", "Asset checklist", "UTM conventions"],
    metrics: ["tracked links planned", "CTA destinations defined", "campaign fields mapped"],
    salesforceBehavior: "Map episode source, campaign, and CTA fields before links go live",
    position: { x: 2480, y: 390 },
  },
  {
    id: "episode-recording",
    label: "Episode Recorded",
    phase: "distribution",
    systems: ["content"],
    metricLayers: ["raw"],
    owner: "Host + Producer",
    purpose: "Record the episode and capture material that can become long-form video, short clips, and supporting content",
    inputs: ["Run of show", "Demo app", "Recording checklist", "Practice-ready talk track"],
    outputs: ["Full recording", "Short clip candidates", "Transcript", "Production notes"],
    metrics: ["recordings completed", "clip candidates", "production cycle time"],
    salesforceBehavior: "No direct Salesforce behavior until the recorded outputs are published and engaged with",
    position: { x: 2790, y: 120 },
  },
  {
    id: "video-distribution",
    label: "Video Channels Published",
    phase: "distribution",
    systems: ["youtube", "shorts", "website"],
    metricLayers: ["raw"],
    owner: "Content Marketing",
    purpose: "Publish the episode and short-form clips where audiences can discover and share them",
    inputs: ["Full recording", "Short clips", "Video descriptions", "Tracking links"],
    outputs: ["YouTube video", "TikTok clips", "LinkedIn posts", "Website embed"],
    metrics: ["views", "watch time", "completion rate", "likes", "subscribers"],
    salesforceBehavior: "Tracked CTAs and links connect video engagement back to campaign and source attribution",
    position: { x: 3100, y: -65 },
  },
  {
    id: "developer-assets",
    label: "Developer Assets Published",
    phase: "distribution",
    systems: ["github", "forge", "website"],
    metricLayers: ["raw", "known"],
    owner: "Builder + Developer Relations",
    purpose: "Turn the episode into reusable technical assets that support platform awareness and developer adoption",
    inputs: ["Demo app", "Source code", "README", "Forge package", "Tracking links"],
    outputs: ["GitHub repo", "README", "Forge component", "Finalized app URL"],
    metrics: ["repo views", "stars", "forks", "clones", "Forge downloads", "Forge installs"],
    salesforceBehavior: "Known clicks or downloads can update Campaign Member Status when identity is available",
    position: { x: 3100, y: 145 },
  },
  {
    id: "aeo-package",
    label: "AEO Content Package Updated",
    phase: "distribution",
    systems: ["website", "content", "analytics"],
    metricLayers: ["raw"],
    owner: "Backoffice + Web",
    purpose: "Make the episode discoverable by search, AI prompts, internal audiences, and external visitors",
    inputs: ["Episode summary", "Tags", "Video URLs", "Developer asset URLs", "CTA links"],
    outputs: ["Public episode page", "AEO-ready description", "Content tags", "Resource links"],
    metrics: ["page visits", "resource clicks", "CTA clicks", "source mix"],
    salesforceBehavior: "Meeting and request CTAs can create known engagement tied to the episode",
    position: { x: 3100, y: 355 },
  },
  {
    id: "metrics-engine",
    label: "Metrics Engine Ingests Performance",
    phase: "analytics",
    systems: ["analytics", "youtube", "github", "forge", "website"],
    metricLayers: ["raw"],
    owner: "Analytics",
    purpose: "Collect video, developer asset, and website performance into a single reporting view",
    inputs: ["YouTube metrics", "TikTok and LinkedIn metrics", "GitHub metrics", "Forge metrics", "Website events"],
    outputs: ["Analytics dashboard", "Platform performance report", "AEO/source reporting"],
    metrics: platformMetrics,
    salesforceBehavior: "Aggregate metrics do not require Salesforce identity but help explain which topics create demand",
    position: { x: 3410, y: 120 },
  },
  {
    id: "cta-meeting-attribution",
    label: "CTA Meetings Attributed",
    phase: "analytics",
    systems: ["analytics", "website", "salesforce", "sales"],
    metricLayers: ["known", "campaign", "business"],
    owner: "Growth + RevOps",
    purpose: "Measure whether episode pages, videos, and developer assets increase meeting volume and high-intent actions",
    inputs: ["CTA clicks", "Booking events", "Episode ID", "Campaign member", "Source attribution"],
    outputs: ["Episode-specific meeting attribution", "Known-person engagement", "Sales follow-up signal"],
    metrics: ["book a meeting CTA", "CTA meeting volume", "questions submitted", "related build requests"],
    salesforceBehavior: "Update campaign member to Booked Meeting or Follow-up Requested and preserve episode/source details",
    position: { x: 3720, y: 120 },
  },
  {
    id: "opportunity-influence",
    label: "Opportunity Influence Reported",
    phase: "analytics",
    systems: ["analytics", "salesforce", "sales"],
    metricLayers: ["campaign", "business"],
    owner: "RevOps + SA@Scale",
    purpose: "Show leadership whether the web series is creating platform awareness, CTAs, meetings, and influenced opportunities",
    inputs: ["Campaign engagement", "Meeting attribution", "Sales activity", "Opportunity/contact roles"],
    outputs: ["Analytical reports", "Opportunity influence reporting", "Leadership dashboard"],
    metrics: businessMetrics,
    salesforceBehavior: "Associate Build It Live campaign influence to opportunities and report episode-level impact",
    position: { x: 4030, y: 120 },
  },
];

export const edges: BuildEdge[] = [
  { id: "e1", source: "public-request-form", target: "source-attribution" },
  { id: "e2", source: "source-attribution", target: "team-email" },
  { id: "e3", source: "source-attribution", target: "email-validation" },
  { id: "e4", source: "team-email", target: "email-validation" },
  { id: "e5", source: "email-validation", target: "salesforce-contact" },
  { id: "e6", source: "salesforce-contact", target: "campaign-member" },
  { id: "e7", source: "campaign-member", target: "backoffice-record" },
  { id: "e8", source: "backoffice-record", target: "review-tag-prioritize" },
  { id: "e9", source: "review-tag-prioritize", target: "episode-candidate" },
  { id: "e10", source: "episode-candidate", target: "episode-plan" },
  { id: "e11", source: "episode-plan", target: "run-of-show" },
  { id: "e12", source: "episode-plan", target: "tracking-cta-plan" },
  { id: "e13", source: "run-of-show", target: "episode-recording" },
  { id: "e14", source: "tracking-cta-plan", target: "episode-recording" },
  { id: "e15", source: "episode-recording", target: "video-distribution" },
  { id: "e16", source: "episode-recording", target: "developer-assets" },
  { id: "e17", source: "episode-recording", target: "aeo-package" },
  { id: "e18", source: "video-distribution", target: "metrics-engine" },
  { id: "e19", source: "developer-assets", target: "metrics-engine" },
  { id: "e20", source: "aeo-package", target: "metrics-engine" },
  { id: "e21", source: "metrics-engine", target: "cta-meeting-attribution" },
  { id: "e22", source: "cta-meeting-attribution", target: "opportunity-influence" },
];

export const campaignModel = {
  hierarchy: ["Build It Live FY26", "Build It Live Q1", "BIL-001: [Episode Topic]", "BIL-002: [Episode Topic]", "BIL-003: [Episode Topic]"],
  statuses: [
    "Requested Build",
    "Selected for Episode",
    "Viewed",
    "Clicked",
    "Downloaded",
    "Booked Meeting",
    "Question Submitted",
    "Follow-up Requested",
    "Opportunity Created",
    "Opportunity Influenced",
  ],
  fields: [
    "request_id",
    "request_source",
    "utm_campaign",
    "utm_source",
    "utm_medium",
    "utm_content",
    "episode_id",
    "build_topic",
    "asset_type",
    "contact_id",
    "account_id",
    "campaign_id",
  ],
  links: [
    "/out/bil-001-youtube?source=linkedin&content=short_clip_02",
    "/out/bil-001-github?source=youtube&content=full_episode",
    "/out/bil-001-booking?source=episode_page&cta=book_meeting",
  ],
};
