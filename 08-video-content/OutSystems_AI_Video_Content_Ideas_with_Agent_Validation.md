# OutSystems AI Video Content Ideas with Agent Validation

Readable text extracted from [OutSystems_AI_Video_Content_Ideas_with_Agent_Validation.docx](<OutSystems_AI_Video_Content_Ideas_with_Agent_Validation.docx>). The Word original is unchanged. Paragraph order and text are retained; formatting may differ.

## OutSystems AI Video Content Ideas

### 1. Build Your First OutSystems Agent: From Use Case to Working Agent

#### Concept

A beginner-friendly “hello world” for Agent Workbench, but with an enterprise mindset. The goal is to show how to choose the right use case, select the right model, connect the right data, and apply the right guardrails.

#### Core Message

Building an agent is not just about turning on AI. It is about defining a focused job, giving the agent the right context, and keeping control through permissions, testing, and governance.

#### Possible Title

Build Your First AI Agent in OutSystems: The Right Way

#### Chapters

1. Start with the business problem

Pick a realistic use case such as answering HR policy questions, triaging customer requests, or summarizing broker support cases.

2. Decide whether this should be an agent

Briefly introduce the decision point, then explain that this video will use a case where an agent is appropriate.

3. Choose the right model for the job

Cover the key decision criteria: reasoning need, latency, cost, data sensitivity, tool-calling needs, and whether the task requires structured output. Mention resources such as Artificial Analysis, Vellum, and OpenRouter as ways to compare models.

4. Define the agent’s job description

Create the agent’s purpose, allowed actions, unavailable actions, escalation path, and success criteria.

5. Connect enterprise knowledge or app data

Show how the agent gets useful context rather than relying on generic model knowledge.

6. Add actions and tools

Examples could include looking up a customer, summarizing a case, creating a task, routing an item, or updating a record.

7. Test happy paths and failure paths

Show what happens when the user asks something clear, ambiguous, unauthorized, or outside the agent’s scope.

8. Publish with guardrails

End with permissions, logging, review, and how to introduce the agent into a real application.

#### Demo Outcome

Viewers see a working OutSystems agent that solves a specific business problem and is designed with enterprise guardrails.

#### Why This Works

This is a strong first video because it introduces agents in a practical way without making them feel like magic. It teaches the viewer how to think before they build.

### 2. Should This Be an Agent? Validating the Need Before You Build

#### Concept

A decision-focused video that helps viewers determine whether a use case really needs an AI agent, or whether it is better solved with a workflow, automation, traditional app logic, search/RAG, or a simple chatbot.

#### Core Message

The first step in building an agent is not opening the agent tool. The first step is validating that the problem actually requires agent behavior. A good agent is used when the task needs context, judgment, language understanding, reasoning, or tool use — not when a simpler workflow or rule would be more reliable.

#### Possible Title Options

Should This Be an Agent? How to Validate the Use Case Before You Build

Agent, Workflow, Automation, or Chatbot? Choosing the Right Pattern in OutSystems

#### Chapters

1. Start with the problem, not the AI feature

Pick a realistic request, such as routing broker support cases or handling employee service questions, and write down the actual business outcome needed.

2. Define what the system must do

List the required behavior: answer a question, summarize information, classify a request, extract fields, recommend a next step, take an action, or coordinate multiple steps.

3. Compare the possible solution patterns

Walk through the main options: traditional app logic, workflow, automation, search/RAG, chatbot, agent, or a combination of these patterns.

4. Identify when a workflow is enough

Show cases where the process is predictable, rule-driven, and approval-based. If the path is known and the decisions are deterministic, a workflow may be the better answer.

5. Identify when automation is enough

Show cases where the system simply needs to perform a repeatable task, such as creating a record, sending a notification, or moving data between systems.

6. Identify when a chatbot or knowledge assistant is enough

Show cases where the user only needs conversational answers from approved knowledge and the system does not need to reason, recommend, or take action.

7. Identify when an agent is justified

Explain that an agent makes sense when the task requires interpretation, context, judgment, structured output, recommendations, tool selection, or escalation decisions.

8. Use a simple decision checklist

Apply a checklist: Does the task need language understanding? Does it need context? Does it need reasoning? Does it need to call tools? Does it need to adapt based on the situation? Does it need human escalation?

9. Validate the risk level

Decide whether the agent should suggest, recommend, prepare an action, act with approval, or act automatically. This keeps the use case realistic and governed.

10. Make the final call

End with a clear decision: this use case should be an agent, this one should be a workflow, and this one should be a workflow with an agent embedded in it.

#### Demo Outcome

Viewers see a practical decision framework that helps them choose the right pattern before building. The final result is not just an agent idea, but a justified agent use case.

#### Why This Works

This fills an important gap in the series. It teaches that agents are powerful, but they are not always the right answer. That makes the rest of the agent content more credible and more enterprise-ready.

### 3. From Requirements Document to Agentic App: Mentor + Workflow + Agent

#### Concept

An end-to-end “conception to execution” video that starts with business requirements, uses Mentor to generate an ODC app, and then adds workflow and agent functionality.

#### Core Message

Mentor can accelerate the first version of an application, but the real value comes when you combine generated app structure with workflow, agents, data, and human review.

#### Example App

Customer escalation management app.

#### Possible Title

Build an Agentic App in OutSystems from a Requirements Doc

#### Chapters

1. Start with a requirements document

Include personas, screens, data, workflow, agent behavior, and integrations.

2. Feed the requirements into Mentor

Use the document as the app generation input.

3. Review the blueprint

Validate entities, screens, roles, workflow assumptions, missing requirements, and areas that need human judgment.

4. Generate the ODC app

Show the generated baseline application.

5. Build the escalation workflow

Add states such as New, Classified, Assigned, In Review, and Resolved.

6. Create the escalation agent

The agent summarizes the issue, detects urgency, recommends routing, and drafts a response.

7. Add human review

The agent drafts or recommends; the human approves.

8. Connect data sources

Connect to an existing O11 system, CRM, ticketing system, knowledge base, or other enterprise data source.

9. Demo the end-to-end experience

A customer escalation comes in → the app captures it → the agent analyzes it → the workflow routes it → a human approves → the response is sent.

#### Demo Outcome

Viewers see how a requirements document can become a working agentic application with Mentor, workflow, and an AI agent.

#### Why This Works

This video shows the full value chain: idea, requirements, generated app, workflow, agent, data, and execution.

### 4. Add an Agent to a Human Workflow: AI + Approvals + Escalations

#### Concept

Instead of showing an agent as a standalone chat experience, this video shows an agent embedded inside a real business workflow.

#### Core Message

Agents are most valuable in enterprise applications when they assist humans inside governed workflows, not when they operate as disconnected chatbots.

#### Example App

An insurance broker submits a request. An agent classifies the request, extracts key data, recommends next steps, and routes it to the correct team. A human approves the final action.

#### Possible Title

Stop Building Chatbots: Build Agentic Workflows in OutSystems

#### Chapters

1. Map the workflow first

Show the current human process: intake, review, classification, assignment, approval, and completion.

2. Identify where AI adds value

The agent should assist with classification, extraction, summarization, recommendation, or routing. It should not own the whole process immediately.

3. Define human-in-the-loop checkpoints

Decide which decisions require human approval.

4. Build the workflow in ODC

Create the process, states, roles, and UI screens.

5. Create the agent

Give the agent a narrow role, such as “analyze request and recommend routing.”

6. Connect the agent to workflow data

Feed it request details, customer or broker metadata, uploaded documents, and previous interactions.

7. Return structured results

Return fields such as category, confidence, summary, risk flags, recommended assignee, and suggested response.

8. Add escalation rules

Low confidence, missing data, restricted actions, or high-risk requests go to a human.

9. Demo end-to-end execution

Submit request → agent analyzes → workflow routes → user approves → case closes.

#### Demo Outcome

Viewers see an agent operating inside a controlled workflow, with clear handoffs and human approval.

#### Why This Works

This is one of the strongest enterprise demos because it shows the difference between “AI chat” and operational AI.

### 5. O11 to ODC: Using Agents and Mentor with Existing OutSystems 11 Data

#### Concept

A practical bridge strategy for current OutSystems customers who have O11 apps, O11 databases, integrations, and legacy logic.

#### Core Message

Customers do not need to start from a blank slate. ODC, Mentor, and agents can be used to extend and modernize existing O11 investments.

#### Possible Title

How to Bring AI Agents to Existing OutSystems 11 Apps with ODC

#### Chapters

1. Start with the reality of existing customers

Most enterprises have O11 systems they cannot simply replace overnight.

2. Pick a modernization use case

For example, expose O11 policy, customer, order, claims, or case data to a new ODC experience.

3. Decide what stays in O11 and what moves to ODC

O11 may remain the system of record while ODC hosts the new experience or agentic layer.

4. Expose the right data

Use APIs, integration services, or controlled access patterns. Avoid shortcuts that create tight coupling.

5. Use Mentor to generate the new ODC experience

Generate the new app shell, screens, roles, and data model where appropriate.

6. Connect to existing O11 data

Wire the ODC app to O11-backed services.

7. Add an agent on top of existing data

Examples: “Summarize this customer’s open cases,” “Find missing onboarding documents,” or “Recommend next best action.”

8. Handle security and permissions

Make sure the agent only sees what the current user is allowed to see.

9. Define the execution strategy

End with a phased modernization pattern: wrap, extend, migrate, retire.

#### Demo Outcome

Viewers see a realistic pattern for adding ODC and AI capabilities on top of existing O11 systems.

#### Why This Works

This is highly relevant for current customers because it addresses modernization without requiring a big-bang replacement.

### 6. Modernize Without Migrating Everything: ODC Agents on Top of Legacy Systems

#### Concept

A modernization-focused video aimed at enterprise buyers and current OutSystems customers. This is less of a developer tutorial and more of an architecture pattern with a working demo.

#### Core Message

ODC can act as a modern experience and AI layer on top of legacy systems while allowing companies to gradually modernize over time.

#### Possible Title

Use OutSystems ODC Agents to Modernize Legacy Apps Without a Big Bang Migration

#### Chapters

1. The modernization problem

Legacy systems are valuable but hard to change.

2. Introduce the pattern: wrap, augment, and gradually replace

Use ODC as the modern experience and agent layer.

3. Choose a legacy process

Examples include claims inquiry, policy lookup, employee eligibility, order exception handling, or customer support.

4. Expose legacy capabilities safely

Use APIs, service layers, permissions, and logging.

5. Build the ODC front end

Use Mentor to accelerate the app shell.

6. Add the agent layer

The agent helps users understand, summarize, and act on legacy data.

7. Add workflow orchestration

When the agent recommends an action, the workflow manages execution.

8. Define what not to automate

Sensitive updates, regulated decisions, and high-risk transactions stay human-reviewed.

9. Roadmap the migration

Identify which capabilities can move from O11 or legacy systems to ODC over time.

#### Demo Outcome

Viewers see how to modernize a legacy process without ripping out the existing system.

#### Why This Works

This is a strong enterprise architecture story because it speaks to buyers who need innovation without disruption.

### 7. Build an AI Agent That Creates Better Work, Not More Work

#### Concept

A practical video about avoiding the common failure mode: agents that create noise, bad tasks, or untrusted recommendations.

#### Core Message

A good agent should reduce operational burden, not create more work for people to clean up.

#### Possible Title

Designing Trustworthy AI Agents in OutSystems

#### Chapters

1. The agent failure problem

AI can sound smart but still create operational burden.

2. Define success metrics first

Examples include reduced handling time, better routing, fewer missing fields, and faster approvals.

3. Limit the agent’s scope

Give the agent one clear job, not ten vague responsibilities.

4. Design structured outputs

Use fields such as category, summary, confidence score, recommended action, and missing information.

5. Put the agent inside a workflow

Do not let the agent operate in isolation.

6. Add confidence thresholds

High confidence: suggest action. Medium confidence: ask the user. Low confidence: escalate.

7. Log decisions and feedback

Capture why a recommendation was accepted or rejected.

8. Improve over time

Use real user feedback to refine prompts, tools, data access, and workflow rules.

#### Demo Outcome

Viewers see how to design an agent that is useful, controlled, measurable, and improvable.

#### Why This Works

This video addresses the practical concerns people have after the initial AI excitement wears off.

### 8. The Enterprise AI App Pattern: Mentor Builds, Agents Assist, Workflows Govern

#### Concept

A flagship thought-leadership video that introduces a repeatable framework for OutSystems AI content.

#### Core Message

The strongest enterprise AI pattern is: Mentor builds, agents assist, and workflows govern.

#### Possible Title

Mentor + Agents + Workflows: The New OutSystems Enterprise AI Pattern

#### Chapters

1. Introduce the pattern

Mentor helps build the app. Agents assist with decisions and tasks. Workflows govern execution.

2. Choose a business process

Examples include onboarding, service requests, claims, approvals, or customer escalations.

3. Generate the app with Mentor

Create the baseline app from requirements.

4. Add agents where judgment or language is involved

Examples include summarization, extraction, classification, and recommendations.

5. Use workflows where accountability is required

Examples include approvals, escalations, SLAs, handoffs, and audit trails.

6. Connect enterprise data

Connect to O11, CRM, ERP, document systems, APIs, or knowledge bases.

7. Govern the whole lifecycle

Cover roles, permissions, traceability, monitoring, and iteration.

8. Demo the full pattern

User submits request → Mentor-built app captures data → agent recommends → workflow controls execution.

9. Recap the architecture

Position this as a reusable OutSystems AI blueprint.

#### Demo Outcome

Viewers see a repeatable architecture pattern for building enterprise AI applications with OutSystems.

#### Why This Works

This can become the anchor video for the entire series because it explains how Mentor, agents, workflows, and governance fit together.

### 9. Themed Build: Build a Sports App with OutSystems, Mentor, Agents, and Workflows

#### Concept

A fun, approachable build series that teaches real ODC, Mentor, agents, workflow, and integration concepts through a sports-themed application.

#### Core Message

You can use a fun consumer-style app to teach serious enterprise development concepts like data modeling, integrations, workflows, AI agents, personalization, and governance.

#### Possible Title Options

Build a World Cup Goal Tracker with OutSystems

Dominate Your Fantasy Football League with an OutSystems AI App

Can OutSystems Build a Better Sports Companion App?

#### Option A: Follow Every World Cup Goal

#### Chapters

1. Define the app idea

Build an app that tracks every World Cup match, goal, player, team, and key moment. Users can follow teams or players they care about.

2. Use Mentor to generate the first version

Prompt Mentor to create match lists, match detail screens, team profiles, player profiles, favorites, notifications, and an admin screen for managing match data.

3. Review the generated blueprint

Review entities, screens, roles, relationships, and assumptions. Possible entities include Team, Player, Match, Goal, Tournament, Group, and UserFavorite.

4. Connect to external sports data

Use a sports API or mock API for fixtures, live scores, goals, events, standings, and player stats.

5. Build the live match experience

Create the match detail page with current score, timeline, goal scorers, cards or substitutions, and match status.

6. Add a goal notification workflow

When a goal event is received, store the goal, update the match score, find users following that team, trigger a notification, and log the event.

7. Add an AI match-summary agent

Create an agent that summarizes a match from structured event data. Output could include a one-sentence recap, key player, turning point, momentum shift, and final takeaway.

8. Add personalization

Let users follow a team, player, group, or tournament stage. Personalize the homepage with updates about the teams or players they follow.

9. Add admin and governance

Cover who can edit match data, how to handle bad API data, what happens if the API fails, and how to audit notifications.

10. Final demo

User opens app → sees live matches → goal happens → notification fires → match page updates → AI summary is generated.

#### Demo Outcome

Viewers see a complete sports-tracking app with integrations, workflows, personalization, and AI-generated summaries.

#### Why This Works

This is a fun way to teach serious OutSystems concepts without using a generic enterprise example.

#### Option B: Dominate Your Fantasy Football League

#### Chapters

1. Define the fantasy football problem

The app helps users answer questions like: Who should I start? Who should I bench? Who should I pick up? Who should I trade? Which players are trending? What are my roster weaknesses?

2. Use Mentor to generate the app shell

Prompt Mentor to create a dashboard, team roster screen, player detail screen, weekly matchup screen, waiver wire screen, and recommendation screen.

3. Create the data model

Possible entities include League, Team, Roster, Player, Position, WeeklyProjection, InjuryStatus, Matchup, Recommendation, and UserDecision.

4. Connect external data

Use sports or fantasy APIs, or mock data, for player projections, injury reports, opponent rankings, weekly matchups, player ownership, and recent performance.

5. Build the recommendation agent

Create an agent that analyzes a roster, player projections, injuries, and matchups, then recommends who to start and why.

6. Add explainability

The agent should explain the recommendation based on matchup, projected volume, injury risk, recent usage, and opponent weakness.

7. Add a waiver-wire workflow

The agent identifies a roster weakness, recommends waiver targets, the user approves, and the app creates a claim plan or task.

8. Add weekly notifications

Examples include injury alerts, start/sit reminders, waiver recommendations, trending players, and bye week warnings.

9. Add feedback learning

Ask the user whether the recommendation was helpful. Capture feedback to improve prompts, rules, recommendation logic, and future agent behavior.

10. Final demo

User opens app → agent reviews roster → recommends starters → explains why → flags risk → creates a waiver recommendation workflow.

#### Demo Outcome

Viewers see an AI-powered fantasy football assistant with recommendations, explainability, workflows, and notifications.

#### Why This Works

Fantasy football is a strong agent-focused demo because it naturally supports recommendations, decision support, reasoning, explainability, and weekly workflows.

### 10. Future State: Building with the Enterprise Context Graph

#### Concept

A future-facing content track around OutSystems’ Enterprise Context Graph and why context-aware AI development matters for enterprise software.

#### Core Message

Vibe coding is powerful, but enterprise development needs context, constraints, architecture, governance, and continuity. The Context Graph is important because it helps AI understand the system it is changing.

#### Possible Title Options

Why OutSystems’ Context Graph Could Change AI App Development

Vibe Coding vs Enterprise AI Development: Why Context Matters

Building with Mentor and the Enterprise Context Graph

The Missing Piece in AI App Generation: Enterprise Context

#### Chapters

1. Start with the vibe coding problem

AI can generate code fast, but does it understand your enterprise? It may not know your architecture, data model, existing apps, governance rules, dependencies, or established patterns.

2. Explain what context means in enterprise software

Context means the AI understands existing apps, data entities, business logic, integrations, roles, permissions, dependencies, architecture patterns, governance rules, and operational constraints.

3. Introduce the Enterprise Context Graph

Position it as a structured understanding of the enterprise application environment that Mentor and agents can use to make better decisions. Be careful not to overpromise until hands-on or EAP details are available.

4. Show why this matters for Mentor

Compare a generic prompt like “Create a customer onboarding app” with a context-aware prompt like “Create a customer onboarding app that uses our existing Customer entity, follows our role model, integrates with our CRM service, and reuses our approval pattern.”

5. Compare vibe coding to context-aware development

Vibe coding starts from a prompt and often generates isolated code. Context-aware OutSystems development starts from a prompt plus enterprise context and is better suited to evolving governed systems.

6. Build scenario: change an existing app

Potential demo: add a new approval step to an existing claims or onboarding process. Show how context-aware AI could understand the existing process, roles, data, screens, dependencies, and governance requirements.

7. Build scenario: modernize an O11 capability into ODC

Example: use ODC, Mentor, and the Context Graph to create a modern agent-enabled experience around an existing O11 customer service app.

8. Build scenario: agent with enterprise awareness

Compare an agent that can only answer generic questions with an agent that understands which app, process, data entity, role, and workflow the user is working with.

9. Governance and trust

Talk about permissions, auditability, architecture consistency, human approval, traceability, policy alignment, and avoiding uncontrolled AI-generated sprawl.

10. What this means for developers

The developer does not disappear. The developer becomes more like an architect, reviewer, and orchestrator.

11. What to test during EAP

Test whether Mentor understands existing entities, reuses existing logic, respects app architecture, explains proposed changes, identifies dependencies, modifies logic safely, supports agents and workflows, improves prompt quality, and avoids bad assumptions.

12. Final takeaway

The future is not just AI that writes code. The future is AI that understands the system it is changing.

#### Demo Outcome

Once available, viewers see how context-aware AI can help modify, modernize, or extend enterprise applications more safely than generic prompt-based generation.

#### Why This Works

This is a strong future-facing topic because it connects OutSystems’ AI direction to the broader conversation around vibe coding, enterprise software, governance, and context-aware development.

### Suggested Series Structure

#### Beginner / Practical Build Track

1. Build Your First OutSystems Agent

2. Should This Be an Agent? Validating the Need Before You Build

3. From Requirements Document to Agentic App

4. Add an Agent to a Human Workflow

5. Themed Build: Sports App with OutSystems

#### Modernization Track

1. O11 to ODC: Using Agents and Mentor with Existing OutSystems 11 Data

2. Modernize Without Migrating Everything

3. Context-Aware Modernization from O11 to ODC

#### Enterprise AI Architecture Track

1. Build an AI Agent That Creates Better Work, Not More Work

2. The Enterprise AI App Pattern

3. Future State: Building with the Enterprise Context Graph
