# Product Requirements Document: Technical Patterns Catalog

## 1. Executive Summary

A searchable catalog platform that aggregates technical architecture patterns submitted by solution architects. The platform consists of two distinct components:

1. **Catalog Website** - An Astro Starlight-powered documentation site managed by site administrators
2. **Community Pattern Repository** - A separate GitHub repository where community members submit patterns using standardized templates

The platform enables knowledge sharing, pattern discovery, and reuse of proven architectural solutions.

## 2. Problem Statement

Solution architects and engineering teams often solve similar architectural challenges independently, leading to:
- Duplicated effort in designing similar solutions
- Inconsistent patterns across teams
- Limited visibility into proven architectural approaches
- Difficulty discovering existing solutions to common problems

## 3. Goals and Objectives

### Primary Goals
- Create a centralized repository for technical architecture patterns
- Enable easy discovery and search of relevant patterns
- Provide standardized pattern documentation
- Foster community contribution and knowledge sharing

### Success Metrics
- Number of patterns submitted
- Pattern search and view metrics
- Community engagement (contributions, issues, PRs)
- Pattern reuse feedback

## 4. User Personas

### Site Administrator
- Manages the catalog website using Astro Starlight
- Configures site structure, navigation, and taxonomy
- Integrates approved patterns from community repository
- Maintains site infrastructure and deployment

### Solution Architect (Contributor)
- Wants to share proven architectural patterns
- Submits patterns to community repository via GitHub PR
- Needs simple submission process with clear templates
- Values standardized documentation format

### Software Engineer (Consumer)
- Searching for solutions to specific technical challenges
- Browses the catalog website
- Needs clear, actionable pattern documentation
- Wants to filter by technology, use case, or complexity

### Pattern Reviewer (Curator)
- Reviews pattern submissions in community repository
- Ensures quality and consistency before approval
- Merges approved patterns for website integration
- Manages pattern taxonomy and categorization

## 5. Functional Requirements

### 5.1 Community Pattern Repository
- [ ] Separate GitHub repository for pattern submissions
- [ ] Contributors submit patterns via pull requests
- [ ] Patterns defined using structured YAML template
- [ ] Automated validation of pattern schema via GitHub Actions
- [ ] Support for architecture diagrams (images)
- [ ] Optional implementation code/templates
- [ ] Clear contribution guidelines and templates in repository
- [ ] Pattern template provided for cloning/copying
- [ ] Subject Matter Expert (SME) notification on PR submission
- [ ] Extensible structure to support future artifact types (workflows, solutions, applications)
- [ ] Separate folders for different artifact types within same repository

### 5.2 Pattern Metadata
Each pattern submission must include:

**YAML File (`pattern.yaml`)**:
- [ ] Title and description
- [ ] Technologies/services used
- [ ] Use case category
- [ ] Author information
- [ ] Version number
- [ ] Tags/labels for search
- [ ] Metadata for page generation

**README.md**:
- [ ] Detailed documentation
- [ ] Architecture diagram
- [ ] Prerequisites
- [ ] Deployment instructions
- [ ] Testing guidance
- [ ] Version history (for updates)

**Diagrams**:
- [ ] Architecture diagrams (in `diagrams/` folder)
- [ ] Supporting images as needed

### 5.3 Catalog Website (Astro Starlight)
- [ ] Built using Astro Starlight framework
- [ ] Utilize native Astro/Starlight features wherever possible
- [ ] Managed by site administrators
- [ ] Browse all approved patterns
- [ ] Search by keyword (using Starlight's native search)
- [ ] Filter by:
  - Technology/service
  - Use case category
  - Complexity level
  - Language (if code provided)
- [ ] Pattern detail page with full documentation
- [ ] Responsive design for mobile/desktop (Starlight native)
- [ ] Navigation and sidebar configuration (Starlight native)
- [ ] Custom branding and theming (Starlight native)

### 5.4 Integration Workflow
- [ ] Automated sync from community repository to website triggered on merge to main
- [ ] Pattern approval and merge triggers website rebuild via GitHub Actions
- [ ] CI/CD pipeline for website deployment
- [ ] YAML metadata transformation to generate Starlight pages
- [ ] README.md from pattern used for detailed documentation
- [ ] Version control for pattern updates (versioning displayed on pattern page)
- [ ] Pattern deprecation support
- [ ] SME notification system for pattern review requests

## 6. Non-Functional Requirements

### 6.1 Performance
- Fast page loads (< 2 seconds)
- Client-side search for instant results
- Optimized images and assets

### 6.2 Accessibility
- WCAG 2.1 Level AA compliance
- Keyboard navigation support
- Screen reader compatible

### 6.3 Scalability
- Support for 100+ patterns initially
- Scalable to 1000+ patterns

### 6.4 Maintainability
- Clear contribution guidelines
- Automated CI/CD pipeline
- Pattern validation tests

## 7. Technical Constraints

- Website must be built using Astro Starlight framework
- Website and community repository must be separate GitHub repositories
- Must be hosted as static site on GitHub Pages (cost-effective)
- Must support GitHub-based workflow for pattern submissions
- Must be open source
- No backend database required (all content in Git)
- Integration between repositories must be automated via GitHub Actions
- Community repository must support extensibility for future artifact types
- All artifact types must reside in same community repository (separate folders)
- Pattern metadata must be defined in YAML format

## 8. User Stories

### US-1: Submit Pattern
**As a** solution architect
**I want to** submit a new pattern via GitHub PR to the community repository
**So that** I can share my architectural solution with the community

**Acceptance Criteria:**
- Pattern template is clearly documented in community repository
- Validation checks ensure required fields are present
- Submission process is documented in CONTRIBUTING.md
- Automated checks run on PR submission

### US-2: Search Patterns
**As a** software engineer
**I want to** search patterns by technology and use case on the catalog website
**So that** I can find relevant solutions to my problem

**Acceptance Criteria:**
- Search returns relevant results
- Filters work correctly
- Results display key pattern information
- Starlight search integration works seamlessly

### US-3: View Pattern Details
**As a** technical lead
**I want to** view complete pattern documentation on the catalog website
**So that** I can evaluate if it fits our use case

**Acceptance Criteria:**
- All pattern metadata is displayed
- Architecture diagram is visible
- Implementation details are clear
- Content is properly formatted in Starlight

### US-4: Manage Website
**As a** site administrator
**I want to** manage the catalog website structure and configuration
**So that** I can maintain a well-organized and accessible catalog

**Acceptance Criteria:**
- Can configure Starlight navigation and sidebar
- Can customize branding and theming
- Can control pattern categorization and taxonomy
- Changes deploy automatically via CI/CD

### US-5: Review Pattern Submission
**As a** subject matter expert (pattern reviewer)
**I want to** review and approve pattern submissions in the community repository
**So that** only quality patterns are published to the catalog

**Acceptance Criteria:**
- Receive notification when PR is submitted for review
- Can review PR with all pattern files visible (YAML, README, diagrams)
- Automated validation passes before manual review
- Can validate content accuracy and quality
- Can request changes or approve
- Approved patterns merged to main trigger website integration automatically

### US-6: Update Existing Pattern
**As a** solution architect
**I want to** submit an update to an existing pattern
**So that** the pattern stays current and accurate

**Acceptance Criteria:**
- Can submit new PR with updated pattern files
- Version number is incremented in YAML
- Version history documented in README
- Updated pattern goes through same review process
- Website displays pattern version and update history
- Previous versions are viewable in repository history

## 9. Open Questions

1. ~~How should the automated sync between repositories work?~~ **RESOLVED**: GitHub Actions triggered on merge to main
2. ~~What level of automation is needed for transforming YAML patterns into Starlight pages?~~ **RESOLVED**: YAML provides metadata for page generation, README provides content
3. ~~Should we support multiple versions of the same pattern?~~ **RESOLVED**: Yes, via version field in YAML and version history in README
4. Should patterns include cost estimates?
5. Should we support pattern templates for common frameworks (AWS CDK, Terraform, etc.)?
6. Do we need a rating/feedback system for patterns?
7. How should SME notifications work (GitHub notifications, email, Slack, etc.)?
8. What is the exact mechanism for merging to main triggering website update (repository_dispatch, webhooks, etc.)?
9. How should pattern categorization and taxonomy be managed across both repositories?
10. What are the specific YAML schema requirements for patterns?
11. What will be the folder structure for future artifact types (workflows, solutions, applications)?

## 10. Out of Scope (V1)

- User authentication/accounts
- Pattern comments/discussions (use GitHub issues)
- Pattern ratings/reviews
- Pattern usage analytics/telemetry
- Interactive pattern playground
- Pattern code execution/testing
- Other artifact types (workflows, solutions, applications) - future phases
- Multiple simultaneous versions of same pattern displayed on website

## 11. Timeline (Tentative)

- **Phase 1**: Define pattern schema and template (Week 1-2)
  - Create pattern YAML structure
  - Design pattern template for community repository
- **Phase 2**: Setup community pattern repository (Week 2-3)
  - Initialize GitHub repository structure
  - Setup GitHub Actions for validation
  - Create CONTRIBUTING.md and templates
- **Phase 3**: Build catalog website with Astro Starlight (Week 3-5)
  - Initialize Astro Starlight project
  - Configure navigation and search
  - Implement pattern browsing and filtering
  - Setup custom branding
- **Phase 4**: Implement repository integration (Week 5-6)
  - Build automation for syncing approved patterns
  - Setup CI/CD pipeline for website deployment
  - Test pattern transformation workflow
- **Phase 5**: Documentation and guidelines (Week 6-7)
  - Complete contribution guidelines
  - Create admin documentation for site management
  - Document integration workflow
- **Phase 6**: Seed with initial patterns (Week 7-8)
  - Submit sample patterns through community repository
  - Test end-to-end workflow
- **Phase 7**: Launch and community outreach (Week 8-9)

## 12. Dependencies

- Astro Starlight framework and documentation
- Two GitHub repositories (website + community patterns)
- GitHub Pages for hosting
- GitHub Actions for automation and validation
- Integration mechanism between repositories (Actions, webhooks, or scheduled sync)
- Diagram format standardization

## 13. Risks and Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| Low community adoption | High | Clear value proposition, easy submission process |
| Inconsistent pattern quality | Medium | Review process, pattern template, guidelines |
| Search performance with many patterns | Medium | Starlight's built-in search optimization |
| Maintenance burden | Medium | Automation, clear contributor guidelines |
| Sync complexity between repositories | High | Well-tested automation, clear failure handling |
| Site administrator bottleneck | Medium | Good documentation, streamlined workflow |

## 14. Appendix

### Reference Implementations
- [AWS Serverless Patterns](https://serverlessland.com/patterns)
- [Example Pattern](https://github.com/aws-samples/serverless-patterns/tree/main/activemq-lambda-sam-java)

### Technology Decisions
- **Static Site Generator**: Astro Starlight (confirmed)
- **Website Repository**: GitHub (for Astro Starlight site)
- **Community Repository**: GitHub (separate, for pattern submissions)
- **Search**: Starlight built-in search (native feature)
- **Hosting**: GitHub Pages
- **Automation**: GitHub Actions
- **Design Philosophy**: Prefer native Astro/Starlight features over third-party solutions
