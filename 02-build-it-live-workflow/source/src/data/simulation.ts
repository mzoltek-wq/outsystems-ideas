export type SimulationStep = {
  id: string;
  label: string;
  system: string;
  description: string;
  outcome: string;
  owner: string;
  detailTitle: string;
  detailItems: string[];
  metricsTracked: string[];
  howTracked: string[];
  whereTracked: string[];
  outputs: string[];
};

export const prefilledSubmission = {
  submissionTitle: "AI-assisted loan application intake",
  submissionType: "Use Case",
  requestDescription:
    "Build a guided loan application intake app where an applicant uploads documents, an agentic layer extracts key details, and a human reviewer can approve, request more information, or route the application.",
  hasAgenticLayer: "Yes",
  aiDetails:
    "Use AI document extraction, applicant summarization, next-best-action recommendations, and a review assistant that explains missing information before submission.",
  hasExternalIntegrations: "No",
  requesterName: "Jordan Taylor",
  requesterEmail: "jordan.taylor@northstarbank.com",
  requesterCompany: "Northstar Bank",
  requesterTitle: "VP, Digital Channels",
  requestSource: "AI Prompt",
};

export const simulationSteps: SimulationStep[] = [
  {
    id: "submit",
    label: "Build Request Submission",
    system: "Public Form Accessible to Any Web Visitor (Login Not Required)",
    description:
      "An internal employee or external visitor submits a build request with the key details needed to evaluate the idea. The submission captures what they want to see built, whether external integrations are involved, whether there is an AI layer, and any relevant AI details. It also collects contact information, including company name and email address, so the team can follow up with questions and notify the requester if the idea is selected.",
    outcome:
      "This data is saved into an OutSystems application used to store requests. The plan is to have a regular cadence, and non-approved requests will be considered for future episodes.",
    owner: "Requester",
    detailTitle: "Build request intake",
    detailItems: [
      "Request ID",
      "Timestamp",
      "Contact name",
      "Company",
      "Email address",
      "Company initiatives or strategic priorities",
      "How the user ended up on this page",
      "Referrer, UTM, or source",
    ],
    metricsTracked: ["Total user submissions", "AI-based submissions", "Types of external integrations being used", "Use cases", "Request source"],
    howTracked: ["OutSystems form submission", "Hidden UTM fields", "Referral/source fields", "Submission timestamp"],
    whereTracked: ["OutSystems Build It Live app", "Future analytics dashboard", "Salesforce after person match"],
    outputs: ["Submission in BIL backoffice", "Potential Salesforce contact"],
  },
  {
    id: "notify",
    label: "SA@Scale Team Notified via Email",
    system: "Email Notification Sent Out When Ideas Are Submitted",
    description:
      "An automated email is sent to the internal team and to the person submitting the request. This lets the team know a new request was submitted, helps validate the email address being used, and provides a link back to the backoffice record. The confirmation email can also point users to free account sign-up information and relevant training resources.",
    outcome: "Email contains brief details about who submitted the request, what their idea is, and a link to the backoffice record.",
    owner: "Automation",
    detailTitle: "Email notification",
    detailItems: ["Email address", "Request information", "Whether the idea and user appear real and not spam"],
    metricsTracked: ["Submission validity", "Use cases", "Email delivery status", "Email bounces"],
    howTracked: ["OutSystems email action/log", "Backoffice status update", "Notification timestamp"],
    whereTracked: ["OutSystems app", "Email system", "Backoffice request timeline"],
    outputs: ["Internal team notification", "Submitter confirmation email", "Validated email signal", "Account and training resource links"],
  },
  {
    id: "salesforce-person",
    label: "Salesforce Data Updated",
    system: "Salesforce Creation/Updating",
    description:
      "If the submission is created by an external user, they can be created as a Salesforce contact if they do not already exist and added to a Build It Live campaign. If they already exist, company and contact information can be updated and they can still be added to the Build It Live campaign.",
    outcome: "This ties the user to the Build It Live process and can be used for metrics tracking for potential opportunity creation.",
    owner: "RevOps automation",
    detailTitle: "Salesforce update",
    detailItems: ["Contact information", "Salesforce records"],
    metricsTracked: ["Campaign signup", "Free environment activity"],
    howTracked: ["Salesforce lookup", "Lead/contact create or update", "Field update history", "Integration logs"],
    whereTracked: ["Salesforce Lead/Contact object", "OutSystems integration log", "Backoffice request record"],
    outputs: ["Salesforce contact created or updated", "Campaign member created or updated", "Source attribution captured"],
  },
  {
    id: "backoffice",
    label: "Converting Submitted Requests into Episodes",
    system: "Backoffice Request Management",
    description:
      "All requests are logged, and spam or non-relevant requests are dismissed or deleted while valid requests are reviewed. Good requests are planned out, and some could be combined into a single episode. Descriptions and details are cleaned up and optimized for search engines and AI prompts before the planning phase.",
    outcome: "If a user's idea is selected, they are notified via email and may be contacted regarding integrations or general questions.",
    owner: "Backoffice",
    detailTitle: "Backoffice request management",
    detailItems: [
      "Specifics on an organization's portfolio",
      "Industry knowledge on integrations and use cases",
      "Request tags",
      "Request status",
      "Priority",
    ],
    metricsTracked: ["Requests reviewed", "Requests approved", "Requests deferred", "Requests dismissed as spam"],
    howTracked: ["Backoffice status fields", "Owner assignment", "Category and priority fields", "Audit timestamps"],
    whereTracked: ["OutSystems Build It Live backoffice", "Future operational dashboard"],
    outputs: ["Episode details"],
  },
  {
    id: "plan",
    label: "Episode Planning",
    system: "Plan Out Each Step of the Episode, Including Outputs",
    description:
      "The full episode is mapped out, including chapters, expected outputs, integrations that need to be configured, opportunities for shorter clips, and distribution outputs. Supporting copy is finalized for internal websites and YouTube descriptions. Practice runs happen before final production so the live recording can be presented as simulive.",
    outcome: "This is where the entire episode is mapped out before production.",
    owner: "Producer + SA",
    detailTitle: "Episode plan",
    detailItems: ["Referenceable episode content", "Run of show", "Tracking plan", "CTA plan", "Asset checklist"],
    metricsTracked: ["None in this step"],
    howTracked: ["Planning checklist", "Episode plan document/link", "Backoffice status", "Owner updates"],
    whereTracked: ["OutSystems backoffice", "Planning document", "Internal content repository"],
    outputs: ["Episode plan", "Chapter layout", "Video descriptions", "Content tags", "Run of show", "Tracking plan", "CTA plan", "Asset checklist"],
  },
  {
    id: "episode-output",
    label: "Episode Recording and Distribution",
    system: "Recording and Posting the Episode",
    description:
      "The episode is recorded and the related content package is generated. Videos are posted to the proper channels: YouTube, TikTok, and LinkedIn. Developer outputs are created as well, including the GitHub repo and README, Forge components, and a finalized app URL that can be shared publicly.",
    outcome: "A single episode creates content across multiple destinations, and each destination has metrics that can be used to track success.",
    owner: "Content Producer",
    detailTitle: "Episode and asset package",
    detailItems: ["Published URLs", "Asset locations", "Tracking links"],
    metricsTracked: ["GitHub analytics", "Video analytics", "Downloads", "Views", "Likes", "Subscriptions by category"],
    howTracked: ["GitHub analytics/API", "Forge analytics/API or export", "Tracked links", "Backoffice asset records"],
    whereTracked: ["YouTube", "TikTok", "LinkedIn", "GitHub", "OutSystems Forge", "Analytics dashboard"],
    outputs: ["Videos", "Developer assets", "AEO-ready content package"],
  },
  {
    id: "analytics",
    label: "Tracking the Metrics",
    system: "The Analytics Monitoring Engine",
    description:
      "An analytics dashboard uses APIs to monitor the performance of video content and developer assets. It can also compare CTA meeting volume before and after episodes, helping the team understand whether content is influencing opportunity creation.",
    outcome: "Monitoring the effects of this content on meeting volume and opportunity creation.",
    owner: "Analytics + RevOps",
    detailTitle: "Analytics monitoring",
    detailItems: ["Views", "Downloads", "Clicks", "Likes", "Site visits", "Meetings", "Book a meeting CTA"],
    metricsTracked: [
      "Video performance",
      "Developer asset performance",
      "CTA meeting volume",
      "Episode-specific meeting attribution",
      "Opportunity creation influence",
    ],
    howTracked: ["APIs where available", "Platform exports", "Tracked links", "Salesforce reporting"],
    whereTracked: ["OutSystems analytics dashboard", "YouTube Studio/API", "GitHub API", "Forge analytics", "Web analytics", "Salesforce"],
    outputs: ["Analytical reports"],
  },
];

export const recommendedTags = ["Agentic AI", "Financial Services", "Document Processing", "Human Review", "High Reuse"];

export const metricsSources = [
  { source: "YouTube API", metric: "views, watch time, retention", status: "Mocked" },
  { source: "LinkedIn / Short-form", metric: "views, completion, shares", status: "API needed" },
  { source: "GitHub Traffic", metric: "visitors, stars, forks, clones", status: "Mocked" },
  { source: "Forge Analytics", metric: "views, installs, downloads", status: "API needed" },
  { source: "Tracked links", metric: "clicks, source, content", status: "Mocked" },
  { source: "Salesforce", metric: "campaign members, influence", status: "Future" },
];

export const sampleSubmissions = [
  {
    id: "BIL-001",
    company: "Northstar Bank",
    topic: "AI-assisted loan application intake",
    requester: "Jordan Taylor",
    status: "New",
    campaignStatus: "Not yet synced",
    owner: "SA@Scale Review",
  },
  {
    id: "BIL-002",
    company: "Helio Manufacturing",
    topic: "Field service dispatch console",
    requester: "Maya Chen",
    status: "In review",
    campaignStatus: "Clicked",
    owner: "Producer",
  },
  {
    id: "BIL-003",
    company: "Apex Health",
    topic: "Provider onboarding workflow",
    requester: "Internal SE",
    status: "Recording complete",
    campaignStatus: "Attended Meeting",
    owner: "Content Ops",
  },
];
