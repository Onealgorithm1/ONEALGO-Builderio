# OpenJarvis Platform

Local-first OpenJarvis platform with Obsidian memory, compliance documentation, and AI agent integrations.

## Purpose

This repository is the One Algorithm integration layer for building a local-first AI assistant platform. It is intended to coordinate OpenJarvis, Obsidian-based persistent memory, compliance documentation, and controlled third-party integrations.

## Architecture Direction

The platform should be treated as an integration and configuration repository, not a warehouse for copied third-party source code.

Core principles:

- Keep organizational memory local-first.
- Use Obsidian as the human-readable knowledge layer.
- Use OpenJarvis or equivalent agent runtime components as upstream dependencies.
- Preserve third-party project licenses and notices.
- Avoid committing secrets, API keys, private documents, or uncontrolled data exports.
- Document major technical decisions through ADRs.

## Planned Components

```text
openjarvis-platform/
├── architecture/
├── compliance/
├── deployment/
├── docs/
├── integrations/
├── obsidian-vault-template/
├── scripts/
├── templates/
└── THIRD_PARTY_NOTICES.md
```

## Integration Strategy

Third-party projects should be referenced as dependencies, forks, or Git submodules where appropriate. Do not copy entire external repositories into this repository unless license review and project need justify vendoring.

Target integrations:

- OpenJarvis
- Obsidian
- Obsidian Mind
- Obsidian Skills
- Obsidian Second Brain
- OpenAI API or other model providers
- Local databases and retrieval services

## Security Rules

Do not commit:

- `.env` files
- API keys
- OAuth tokens
- passwords
- private certificates
- client data
- government contract artifacts unless approved
- production database files
- Obsidian vaults containing sensitive operational data

## Current Status

Initial repository scaffold. Next steps are to add architecture documentation, ADR templates, third-party notices, and Obsidian vault structure.
