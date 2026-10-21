# OutSystems AI Video Content Ideas Google Docs Ready

Readable text extracted from [OutSystems_AI_Video_Content_Ideas_Google_Docs_Ready.docx](<OutSystems_AI_Video_Content_Ideas_Google_Docs_Ready.docx>). The Word original is unchanged. Paragraph order and text are retained; formatting may differ.

## OutSystems AI Video Content Ideas

### 1. Build Your First OutSystems Agent: From Use Case to Working Agent

Concept: A beginner-friendly “hello world” for Agent Workbench, but with an enterprise mindset. The goal is to show how to choose the right use case, select the right model, connect the right data, and apply the right guardrails.

Core message: Building an agent is not just about turning on AI. It is about defining a focused job, giving the agent the right context, and keeping control through permissions, testing, and governance.

Possible title: Build Your First AI Agent in OutSystems: The Right Way

#### Chapters

Start with the business problem

Pick a realistic use case such as answering HR policy questions, triaging customer requests, or summarizing broker support cases.

Decide whether this should be an agent

Explain the difference between a chatbot, automation, workflow, and agent. The hook is that not every AI feature deserves to be an agent. In this video, the selected use case will become an agent.

Choose the right model for the job

Cover the key decision criteria: reasoning need, latency, cost, data sensitivity, tool-calling needs, and whether the task requires structured output. Mention resources such as Artificial Analysis, Vellum, and OpenRouter as ways to compare models.

Define the agent’s job description

Create the agent’s purpose, allowed actions, unavailable actions, escalation path, and success criteria.

Connect enterprise knowledge or app data

Show how the agent gets useful context rather than relying on generic model knowledge.

Add actions and tools

Examples could include looking up a customer, summarizing a case, creating a task, routing an item, or updating a record.

Test happy paths and failure paths

Show what happens when the user asks something clear, ambiguous, unauthorized, or outside the agent’s scope.

Publish with guardrails

End with permissions, logging, review, and how to introduce the agent into a real application.

Demo outcome: Viewers see a working OutSystems agent that solves a specific business problem and is designed with enterprise guardrails.

Why this works: This is a strong first video because it introduces agents in a practical way without making them feel like magic. It teaches the viewer how to think before they build.

### 2. From Requirements Document to Agentic App: Mentor + Workflow + Agent

Concept: An end-to-end “conception to execution” video that starts with business requirements, uses Mentor to generate an ODC app, and then adds workflow and agent functionality.

Core message: Mentor can accelerate the first version of an application, but the real value comes when you combine generated app structure with workflow, agents, data, and human review.

Example app: Customer escalation management app.

Possible title: Build an Agentic App in OutSystems from a Requirements Doc

#### Chapters

Start with a requirements document

Include personas, screens, data, workflow, agent behavior, and integrations.

Feed the requirements into Mentor

Use the document as the app generation input.

Review the blueprint

Validate entities, screens, roles, workflow assumptions, missing requirements, and areas that need human judgment.

Generate the ODC app

Show the generated baseline application.

Build the escalation workflow

Add states such as New, Classified, Assigned, In Review, and Resolved.

Create the escalation agent

The agent summarizes the issue, detects urgency, recommends routing, and drafts a response.

Add human review

The agent drafts or recommends; the human approves.

Connect data sources

Connect to an existing O11 system, CRM, ticketing system, knowledge base, or other enterprise data source.

Demo the end-to-end experience

A customer escalation comes in → the app captures it → the agent analyzes it → the workflow routes it → a human approves → the response is sent.

Demo outcome: Viewers see how a requirements document can become a working agentic application with Mentor, workflow, and an AI agent.

Why this works: This video shows the full value chain: idea, requirements, generated app, workflow, agent, data, and execution.

### 3. Add an Agent to a Human Workflow: AI + Approvals + Escalations

Concept: Instead of showing an agent as a standalone chat experience, this video shows an agent embedded inside a real business workflow.

Core message: Agents are most valuable in enterprise applications when they assist humans inside governed workflows, not when they operate as disconnected chatbots.

Example use case: An insurance broker submits a request. An agent classifies the request, extracts key data, recommends next steps, and routes it to the correct team. A human approves the final action.

Possible title: Stop Building Chatbots: Build Agentic Workflows in OutSystems

#### Chapters

Map the workflow first

Show the current human process: intake, review, classification, assignment, approval, and completion.

Identify where AI adds value

The agent should assist with classification, extraction, summarization, recommendation, or routing. It should not own the whole process immediately.

Define human-in-the-loop checkpoints

Decide which decisions require human approval.

Build the workflow in ODC

Create the process, states, roles, and UI screens.

Create the agent

Give the agent a narrow role, such as “analyze request and recommend routing.”

Connect the agent to workflow data

Feed it request details, customer or broker metadata, uploaded documents, and previous interactions.

Return structured results

Return fields such as category, confidence, summary, risk flags, recommended assignee, and suggested response.

Add escalation rules

Low confidence, missing data, restricted actions, or high-risk requests go to a human.

Demo end-to-end execution

Submit request → agent analyzes → workflow routes → user approves → case closes.

Demo outcome: Viewers see an agent operating inside a controlled workflow, with clear handoffs and human approval.

Why this works: This is one of the strongest enterprise demos because it shows the difference between “AI chat” and operational AI.

### 4. O11 to ODC: Using Agents and Mentor with Existing OutSystems 11 Data

Concept: A practical bridge strategy for current OutSystems customers who have O11 apps, O11 databases, integrations, and legacy logic.

Core message: Customers do not need to start from a blank slate. ODC, Mentor, and agents can be used to extend and modernize existing O11 investments.

Possible title: How to Bring AI Agents to Existing OutSystems 11 Apps with ODC

#### Chapters

Start with the reality of existing customers

Most enterprises have O11 systems they cannot simply replace overnight.

Pick a modernization use case

For example, expose O11 policy, customer, order, claims, or case data to a new ODC experience.

Decide what stays in O11 and what moves to ODC

O11 may remain the system of record while ODC hosts the new experience or agentic layer.

Expose the right data

Use APIs, integration services, or controlled access patterns. Avoid shortcuts that create tight coupling.

Use Mentor to generate the new ODC experience

Generate the new app shell, screens, roles, and data model where appropriate.

Connect to existing O11 data

Wire the ODC app to O11-backed services.

Add an agent on top of existing data

Examples: “Summarize this customer’s open cases,” “Find missing onboarding documents,” or “Recommend next best action.”

Handle security and permissions

Make sure the agent only sees what the current user is allowed to see.

Define the execution strategy

End with a phased modernization pattern: wrap, extend, migrate, retire.

Demo outcome: Viewers see a realistic pattern for adding ODC and AI capabilities on top of existing O11 systems.

Why this works: This is highly relevant for current customers because it addresses modernization without requiring a big-bang replacement.

### 5. Modernize Without Migrating Everything: ODC Agents on Top of Legacy Systems

Concept: A modernization-focused video aimed at enterprise buyers and current OutSystems customers. This is less of a developer tutorial and more of an architecture pattern with a working demo.

Core message: ODC can act as a modern experience and AI layer on top of legacy systems while allowing companies to gradually modernize over time.

Possible title: Use OutSystems ODC Agents to Modernize Legacy Apps Without a Big Bang Migration

#### Chapters

The modernization problem

Legacy systems are valuable but hard to change.

Introduce the pattern: wrap, augment, and gradually replace

Use ODC as the modern experience and agent layer.

Choose a legacy process

Examples include claims inquiry, policy lookup, employee eligibility, order exception handling, or customer support.

Expose legacy capabilities safely

Use APIs, service layers, permissions, and logging.

Build the ODC front end

Use Mentor to accelerate the app shell.

Add the agent layer

The agent helps users understand, summarize, and act on legacy data.

Add workflow orchestration

When the agent recommends an action, the workflow manages execution.

Define what not to automate

Sensitive updates, regulated decisions, and high-risk transactions stay human-reviewed.

Roadmap the migration

Identify which capabilities can move from O11 or legacy systems to ODC over time.

Demo outcome: Viewers see how to modernize a legacy process without ripping out the existing system.

Why this works: This is a strong enterprise architecture story because it speaks to buyers who need innovation without disruption.

### 6. Build an AI Agent That Creates Better Work, Not More Work

Concept: A practical video about avoiding the common failure mode: agents that create noise, bad tasks, or untrusted recommendations.

Core message: A good agent should reduce operational burden, not create more work for people to clean up.

Possible title: Designing Trustworthy AI Agents in OutSystems

#### Chapters

The agent failure problem

AI can sound smart but still create operational burden.

Define success metrics first

Examples include reduced handling time, better routing, fewer missing fields, and faster approvals.

Limit the agent’s scope

Give the agent one clear job, not ten vague responsibilities.

Design structured outputs

Use fields such as category, summary, confidence score, recommended action, and missing information.

Put the agent inside a workflow

Do not let the agent operate in isolation.

Add confidence thresholds

High confidence: suggest action. Medium confidence: ask the user. Low confidence: escalate.

Log decisions and feedback

Capture why a recommendation was accepted or rejected.

Improve over time

Use real user feedback to refine prompts, tools, data access, and workflow rules.

Demo outcome: Viewers see how to design an agent that is useful, controlled, measurable, and improvable.

Why this works: This video addresses the practical concerns people have after the initial AI excitement wears off.

### 7. The Enterprise AI App Pattern: Mentor Builds, Agents Assist, Workflows Govern

Concept: A flagship thought-leadership video that introduces a repeatable framework for OutSystems AI content.

Core message: The strongest enterprise AI pattern is: Mentor builds, agents assist, and workflows govern.

Possible title: Mentor + Agents + Workflows: The New OutSystems Enterprise AI Pattern

#### Chapters

Introduce the pattern

Mentor helps build the app. Agents assist with decisions and tasks. Workflows govern execution.

Choose a business process

Examples include onboarding, service requests, claims, approvals, or customer escalations.

Generate the app with Mentor

Create the baseline app from requirements.

Add agents where judgment or language is involved

Examples include summarization, extraction, classification, and recommendations.

Use workflows where accountability is required

Examples include approvals, escalations, SLAs, handoffs, and audit trails.

Connect enterprise data

Connect to O11, CRM, ERP, document systems, APIs, or knowledge bases.

Govern the whole lifecycle

Cover roles, permissions, traceability, monitoring, and iteration.

Demo the full pattern

User submits request → Mentor-built app captures data → agent recommends → workflow controls execution.

Recap the architecture

Position this as a reusable OutSystems AI blueprint.

Demo outcome: Viewers see a repeatable architecture pattern for building enterprise AI applications with OutSystems.

Why this works: This can become the anchor video for the entire series because it explains how Mentor, agents, workflows, and governance fit together.

### 8. Themed Build: Build a Sports App with OutSystems, Mentor, Agents, and Workflows

Concept: A fun, approachable build series that teaches real ODC, Mentor, agents, workflow, and integration concepts through a sports-themed application.

Core message: You can use a fun consumer-style app to teach serious enterprise development concepts like data modeling, integrations, workflows, AI agents, personalization, and governance.

#### Possible title options

Build a World Cup Goal Tracker with OutSystems

Dominate Your Fantasy Football League with an OutSystems AI App

Can OutSystems Build a Better Sports Companion App?

#### Option A: Follow Every World Cup Goal

#### Chapters

Define the app idea

Build an app that tracks every World Cup match, goal, player, team, and key moment. Users can follow teams or players they care about.

Use Mentor to generate the first version

Prompt Mentor to create match lists, match detail screens, team profiles, player profiles, favorites, notifications, and an admin screen for managing match data.

Review the generated blueprint

Review entities, screens, roles, relationships, and assumptions. Possible entities include Team, Player, Match, Goal, Tournament, Group, and UserFavorite.

Connect to external sports data

Use a sports API or mock API for fixtures, live scores, goals, events, standings, and player stats.

Build the live match experience

Create the match detail page with current score, timeline, goal scorers, cards or substitutions, and match status.

Add a goal notification workflow

When a goal event is received, store the goal, update the match score, find users following that team, trigger a notification, and log the event.

Add an AI match-summary agent

Create an agent that summarizes a match from structured event data. Output could include a one-sentence recap, key player, turning point, momentum shift, and final takeaway.

Add personalization

Let users follow a team, player, group, or tournament stage. Personalize the homepage with updates about the teams or players they follow.

Add admin and governance

Cover who can edit match data, how to handle bad API data, what happens if the API fails, and how to audit notifications.

Final demo

User opens app → sees live matches → goal happens → notification fires → match page updates → AI summary is generated.

Demo outcome: Viewers see a complete sports-tracking app with integrations, workflows, personalization, and AI-generated summaries.

Why this works: This is a fun way to teach serious OutSystems concepts without using a generic enterprise example.

#### Option B: Dominate Your Fantasy Football League

#### Chapters

Define the fantasy football problem

The app helps users answer questions like: Who should I start? Who should I bench? Who should I pick up? Who should I trade? Which players are trending? What are my roster weaknesses?

Use Mentor to generate the app shell

Prompt Mentor to create a dashboard, team roster screen, player detail screen, weekly matchup screen, waiver wire screen, and recommendation screen.

Create the data model

Possible entities include League, Team, Roster, Player, Position, WeeklyProjection, InjuryStatus, Matchup, Recommendation, and UserDecision.

Connect external data

Use sports or fantasy APIs, or mock data, for player projections, injury reports, opponent rankings, weekly matchups, player ownership, and recent performance.

Build the recommendation agent

Create an agent that analyzes a roster, player projections, injuries, and matchups, then recommends who to start and why.

Add explainability

The agent should explain the recommendation based on matchup, projected volume, injury risk, recent usage, and opponent weakness.

Add a waiver-wire workflow

The agent identifies a roster weakness, recommends waiver targets, the user approves, and the app creates a claim plan or task.

Add weekly notifications

Examples include injury alerts, start/sit reminders, waiver recommendations, trending players, and bye week warnings.

Add feedback learning

Ask the user whether the recommendation was helpful. Capture feedback to improve prompts, rules, recommendation logic, and future agent behavior.

Final demo

User opens app → agent reviews roster → recommends starters → explains why → flags risk → creates a waiver recommendation workflow.

Demo outcome: Viewers see an AI-powered fantasy football assistant with recommendations, explainability, workflows, and notifications.

Why this works: Fantasy football is a strong agent-focused demo because it naturally supports recommendations, decision support, reasoning, explainability, and weekly workflows.

### 9. Future State: Building with the Enterprise Context Graph

Concept: A future-facing content track around OutSystems’ Enterprise Context Graph and why context-aware AI development matters for enterprise software.

Core message: Vibe coding is powerful, but enterprise development needs context, constraints, architecture, governance, and continuity. The Context Graph is important because it helps AI understand the system it is changing.

#### Possible title options

Why OutSystems’ Context Graph Could Change AI App Development

Vibe Coding vs Enterprise AI Development: Why Context Matters

Building with Mentor and the Enterprise Context Graph

The Missing Piece in AI App Generation: Enterprise Context

#### Chapters

Start with the vibe coding problem

AI can generate code fast, but does it understand your enterprise? It may not know your architecture, data model, existing apps, governance rules, dependencies, or established patterns.

Explain what context means in enterprise software

Context means the AI understands existing apps, data entities, business logic, integrations, roles, permissions, dependencies, architecture patterns, governance rules, and operational constraints.

Introduce the Enterprise Context Graph

Position it as a structured understanding of the enterprise application environment that Mentor and agents can use to make better decisions. Be careful not to overpromise until hands-on or EAP details are available.

Show why this matters for Mentor

Compare a generic prompt like “Create a customer onboarding app” with a context-aware prompt like “Create a customer onboarding app that uses our existing Customer entity, follows our role model, integrates with our CRM service, and reuses our approval pattern.”

Compare vibe coding to context-aware development

Vibe coding starts from a prompt and often generates isolated code. Context-aware OutSystems development starts from a prompt plus enterprise context and is better suited to evolving governed systems.

Build scenario: change an existing app

Potential demo: add a new approval step to an existing claims or onboarding process. Show how context-aware AI could understand the existing process, roles, data, screens, dependencies, and governance requirements.

Build scenario: modernize an O11 capability into ODC

Example: use ODC, Mentor, and the Context Graph to create a modern agent-enabled experience around an existing O11 customer service app.

Build scenario: agent with enterprise awareness

Compare an agent that can only answer generic questions with an agent that understands which app, process, data entity, role, and workflow the user is working with.

Governance and trust

Talk about permissions, auditability, architecture consistency, human approval, traceability, policy alignment, and avoiding uncontrolled AI-generated sprawl.

What this means for developers

The developer does not disappear. The developer becomes more like an architect, reviewer, and orchestrator.

What to test during EAP

Test whether Mentor understands existing entities, reuses existing logic, respects app architecture, explains proposed changes, identifies dependencies, modifies logic safely, supports agents and workflows, improves prompt quality, and avoids bad assumptions.

Final takeaway

The future is not just AI that writes code. The future is AI that understands the system it is changing.

Demo outcome: Once available, viewers see how context-aware AI can help modify, modernize, or extend enterprise applications more safely than generic prompt-based generation.

Why this works: This is a strong future-facing topic because it connects OutSystems’ AI direction to the broader conversation around vibe coding, enterprise software, governance, and context-aware development.

### Suggested Series Structure

#### Beginner / Practical Build Track

Build Your First OutSystems Agent

From Requirements Document to Agentic App

Add an Agent to a Human Workflow

Themed Build: Sports App with OutSystems

#### Modernization Track

O11 to ODC: Using Agents and Mentor with Existing OutSystems 11 Data

Modernize Without Migrating Everything

Context-Aware Modernization from O11 to ODC

#### Enterprise AI Architecture Track

Build an AI Agent That Creates Better Work, Not More Work

The Enterprise AI App Pattern

Future State: Building with the Enterprise Context Graph
