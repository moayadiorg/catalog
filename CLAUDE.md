# Technical Patterns Catalog

## Project Overview

A community-driven catalog of technical architecture patterns submitted by solution architects. The platform consists of two distinct components working together:

1. **Catalog Website** - An Astro Starlight documentation site managed by administrators
2. **Community Pattern Repository** - A separate GitHub repository where the community submits patterns

The catalog enables teams to discover, search, and reuse proven architectural patterns across different technologies and use cases.

## Inspiration

This project is inspired by [AWS Serverless Land Patterns](https://serverlessland.com/patterns), which provides a searchable collection of serverless integration patterns with detailed documentation and implementation examples.

## Architecture

### Separation of Concerns

The platform implements a clear separation between site administration and community contributions:

- **Website Repository**: Contains the Astro Starlight site, managed by site administrators
- **Community Repository**: Contains pattern submissions, managed by the community with reviewer oversight
- **Integration**: Automated workflow syncs approved patterns from community repository to website

## Key Components

### 1. Community Pattern Repository

**Purpose**: Community hub for pattern submissions

**Structure**:
- Structured YAML or JSON files containing pattern metadata
- Each pattern includes architecture diagrams, description, technologies used, and implementation details
- Contribution guidelines and templates
- GitHub Actions for automated validation
- Pull request workflow for submissions

**Pattern Structure** - Based on serverless-land patterns, each submission includes:
- `pattern.yaml` - Structured metadata (used for page generation)
  - Title, description, author
  - Technologies/services used
  - Use case category
  - Version number
  - Tags for search
- `README.md` - Detailed documentation (used for page content)
  - Architecture overview
  - Prerequisites
  - Deployment instructions
  - Testing guidance
  - Version history
- `diagrams/` - Architecture diagrams
- Implementation code/templates (optional)

### 2. Catalog Website (Astro Starlight)

**Purpose**: Public-facing searchable catalog

**Features**:
- Built with Astro Starlight framework
- Searchable and filterable pattern catalog
- Responsive documentation interface
- Custom branding and navigation
- Optimized for performance and SEO

**Management**:
- Maintained by site administrators
- Automated deployment via CI/CD
- Content synced from approved patterns

### 3. Integration Workflow

**Purpose**: Connect community submissions with public catalog

**Process**:
1. Contributor clones pattern template (YAML + README structure)
2. Contributor completes YAML metadata and README documentation
3. Pattern submitted to community repository via PR
4. Automated validation runs (YAML schema, required files)
5. Subject Matter Expert (SME) receives notification
6. SME performs manual quality and content review
7. SME approves or requests changes
8. Approved pattern merged to main in community repository
9. Merge to main triggers GitHub Action in website repository
10. YAML metadata used to generate Starlight page
11. README content integrated into pattern documentation
12. Website rebuilt and deployed to GitHub Pages
13. New pattern appears in searchable catalog

**Pattern Updates**:
- Contributor submits PR with updated files and incremented version
- Version history maintained in README
- Same review and merge process
- Website displays current version with version history

## Technology Stack

### Catalog Website
- **Framework**: Astro Starlight
- **Hosting**: GitHub Pages
- **Search**: Starlight built-in search (native)
- **Deployment**: GitHub Actions CI/CD
- **Design Philosophy**: Utilize native Astro/Starlight features wherever possible

### Community Repository
- **Repository Platform**: GitHub
- **Pattern Format**: YAML for metadata
- **Documentation Format**: README.md (Markdown)
- **Validation**: GitHub Actions
- **Review Process**: GitHub Pull Requests with SME notification
- **Repository Structure**:
  - `/patterns/` - Pattern submissions (V1)
  - `/workflows/` - Workflow submissions (future)
  - `/solutions/` - Solution submissions (future)
  - `/applications/` - Application submissions (future)
  - Template files for each artifact type

### Integration
- **Automation**: GitHub Actions
- **Sync Method**: Event-driven (merge to main triggers website rebuild)
- **Trigger Mechanism**: GitHub Actions workflow_dispatch or repository_dispatch

## User Roles

### Site Administrator
- Manages the Astro Starlight website
- Configures site structure, navigation, and taxonomy
- Oversees deployment and infrastructure
- Integrates approved patterns from community repository

### Pattern Contributor
- Submits patterns to community repository
- Follows standardized template
- Responds to reviewer feedback
- Uses GitHub pull request workflow

### Pattern Reviewer (Subject Matter Expert)
- Reviews community pattern submissions for content validity and quality
- Receives notifications when PRs are submitted
- Ensures quality and consistency
- Approves or requests changes on PRs
- Maintains pattern standards
- Merges approved patterns to trigger website integration

### Catalog User
- Browses and searches patterns on website
- Views pattern documentation
- Uses patterns in their own projects
- Provides feedback via GitHub issues

## Extensibility

The platform is designed for extensibility to support multiple artifact types beyond patterns:

### V1 (Current Focus)
- **Patterns**: Technical architecture patterns with YAML metadata

### Future Artifact Types
The community repository structure supports additional artifact types in separate folders:
- **Workflows**: Process and workflow documentation
- **Solutions**: End-to-end solution architectures
- **Applications**: Application templates and references

Each artifact type will have:
- Its own folder in the community repository (`/patterns/`, `/workflows/`, etc.)
- Dedicated YAML schema template
- Specific validation rules
- Same review and integration workflow
- Separate website sections in catalog

## Current Status

**Phase**: Project initialization
**Focus**: Patterns (V1)
**Activities**: Defining structure, requirements, and implementation approach

## Related Documentation

- [PRD.md](PRD.md) - Product Requirements Document
- [ARCHITECTURE.md](ARCHITECTURE.md) - Technical architecture decisions and implementation details
- [pattern.yaml](Patterns/pattern-template/pattern.yaml) - Pattern template structure
