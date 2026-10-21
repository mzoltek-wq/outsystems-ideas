# OutSystems team handoff

This repository brings together seven related OutSystems initiatives: Build It Live, the technical team landing page, the free-offering redesign, inbound strategy, video content, and blueprint sessions. Start with the project map below, then use the status notes to see what exists and what still needs a decision.

Prepared 21 October 2026. The numbered folders match the original inventory selection: **1, 2, 3, 4, 7, 8, and 9**.

## Project map

| ID | Project | Start here | State |
|---|---|---|---|
| 01 | Build It Live strategy | [One-pager](01-build-it-live-strategy/build-it-live-one-pager.pdf) · [Deck](01-build-it-live-strategy/build-it-live-vp-devrel-draft.pptx) | Strategy and presentation drafts |
| 02 | Build It Live workflow and measurement | [Project guide](02-build-it-live-workflow/README.md) | Interactive prototype and source |
| 03 | Technical team landing page | [Project guide](03-team-landing-page/README.md) | Static website and booking UI |
| 04 | Free offering and Mentor Access | [Strategy discussion](04-free-offering/strategy-discussion.md) · [Prototype guide](04-free-offering/README.md) | Proposed offering and concept page |
| 07 | Inbound content strategy | [Strategy](07-inbound-strategy/strategy.md) | Working program ideas |
| 08 | AI video content backlog | [Video plans](08-video-content/README.md) | Three versions retained for comparison |
| 09 | Blueprint sessions and team positioning | [Positioning notes](09-blueprint-sessions/naming-and-positioning.md) | Session scope and naming exploration |

[Project status and next decisions](PROJECT-STATUS.md) provides the detailed context and source references for each group.

## Suggested review order

1. Read the Build It Live one-pager to understand the proposed program.
2. Review the workflow and measurement prototype alongside it.
3. Explore the team landing page and free-offering concept as entry points for prospects and builders.
4. Use the inbound strategy and video backlog to choose content priorities.
5. Confirm the blueprint-session offer and team language.

These connections are an organizing interpretation of the work, not an approved program structure.

## Working with the files

- Markdown files contain the readable strategy and handoff notes.
- Word, PowerPoint, PDF, and PNG deliverables retain their original content.
- Each video-plan Word file has a Markdown companion for easy browsing and comparison.
- Website folders contain source snapshots. Use their existing repositories for ongoing development when appropriate: [LandingPage](https://github.com/mzoltek-wq/LandingPage) and [BILWorkflow](https://github.com/mzoltek-wq/BILWorkflow).
- The static pages can be opened locally from their `site/index.html` files. Their forms and trial flows are prototypes, not confirmed live services.
- The workflow prototype has its original package manifest and lockfile under `02-build-it-live-workflow/source`. Dependencies are not bundled. Its original client-side preview gate remains in source and is not authentication.
- The archived PDF-generation script uses an original local output path; update that path before running it elsewhere.

## Ownership and follow-up

For each retained initiative, agree the receiving owner, the preferred version, and the next action. Record those decisions in `PROJECT-STATUS.md` as the handoff proceeds.

The free-offering limits, conversion ideas, pilot plans, and team names are proposals. Historical competitor comparisons and platform claims should be checked when reused. No current deployment or service behavior was revalidated during this consolidation.

## Sources and coverage

Source conversations are linked for provenance; they may require Mike's original ChatGPT or Codex access. The package includes the recovered deliverables and relevant text so those accounts are not needed for the main handoff. Claude material has not yet been searched or added. The originating chat for the video-plan documents remains unconfirmed.

`source-register.json` lists the relevant retrieved chats. `file-manifest.json` provides checksums for this package. This is a selected handoff snapshot, not a complete export of either assistant's history.
