# Export and move this handoff

All collected attachments, project notes, and source snapshots are stored as ordinary files in this repository. There are no Git LFS objects, submodules, or externally stored attachments required to obtain the packaged material.

## Download all current files

On the GitHub repository page, choose **Code → Download ZIP**. Extract the ZIP to get the entire current collection, including Word documents, PowerPoint slides, PDFs, images, Markdown notes, and website source.

This is the easiest option for uploading the collection into company Google Drive or another shared folder. It includes the current files, but not Git commit history. Access to this private repository is required to download it from GitHub.

## Keep files and version history

Clone the repository using GitHub Desktop or Git:

```sh
git clone https://github.com/mzoltek-wq/outsystems-team-handoff.git
```

The clone includes the files and Git commit history. A teammate needs repository access to clone directly from GitHub.

For a portable single-file backup with history, run this inside the clone:

```sh
git bundle create ../outsystems-team-handoff.bundle --all
```

Restore that backup into a new folder with:

```sh
git clone outsystems-team-handoff.bundle restored-handoff
```

## What the export covers

The collection includes the recovered material for project groups **1, 2, 3, 4, 7, 8, and 9**. Original chat links are provenance references; they do not grant access to the original conversations. Selected discussion text and recovered deliverables are included locally. This is not a full conversation-history export, a live website deployment, or a backup of external services. Claude-only work has not yet been added.

The included website code is a snapshot. The original development repositories are linked from the overview for any later changes or development history.
