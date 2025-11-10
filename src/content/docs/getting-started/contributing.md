---
title: Contributing to the Catalog
description: Learn how to contribute your own patterns to the Technical Patterns Catalog
---

## Welcome Contributors!

We're excited that you want to contribute to the Technical Patterns Catalog. This guide will help you submit your patterns and improvements.

## Ways to Contribute

You can contribute to the catalog in several ways:

- **Submit new patterns** - Share your architectural solutions
- **Improve existing patterns** - Add details, examples, or clarifications
- **Report issues** - Help us fix bugs and improve documentation
- **Suggest enhancements** - Propose new features or improvements
- **Review submissions** - Help review and validate community contributions

## Submitting a New Pattern

### Before You Start

1. **Search existing patterns** - Make sure your pattern isn't already in the catalog
2. **Check for similar patterns** - Your pattern might be a variation of an existing one
3. **Ensure it's reusable** - The pattern should be applicable to multiple scenarios
4. **Verify it's proven** - The pattern should be tested and used in production

### Pattern Requirements

A good pattern submission includes:

#### Required Elements

- **Clear title** - Descriptive name that indicates what the pattern does
- **Problem statement** - What specific problem does this solve?
- **Solution description** - How does the pattern solve the problem?
- **Implementation guide** - Step-by-step instructions
- **Code examples** - Working code that demonstrates the pattern
- **Prerequisites** - What's needed to implement this pattern

#### Recommended Elements

- **Architecture diagram** - Visual representation of the solution
- **Benefits** - Why use this pattern?
- **Trade-offs** - What are the drawbacks or limitations?
- **Use cases** - When should you use this pattern?
- **Related patterns** - Links to complementary patterns
- **Version history** - Track changes over time
- **Testing guidance** - How to verify the implementation

### Submission Process

#### 1. Fork the Repository

```bash
git clone https://github.com/moayadiorg/patterns.git
cd patterns
```

#### 2. Create a New Branch

```bash
git checkout -b pattern/your-pattern-name
```

#### 3. Create Your Pattern File

Create a new file in `src/content/docs/patterns/`:

```bash
touch src/content/docs/patterns/your-pattern-name.md
```

#### 4. Use the Pattern Template

Start with this template:

```markdown
---
title: Your Pattern Name
description: Brief description of what this pattern does
category: automation  # or observability, security, monitoring, integration, data-protection
difficulty: intermediate  # beginner, intermediate, or advanced
technologies:
  - name: Technology1
    version: "1.0"
  - name: Technology2
author: Your Name
submittedDate: 2024-01-15
tags:
  - tag1
  - tag2
---

## Overview

Brief overview of the pattern.

## Problem

What problem does this pattern solve?

## Solution

How does this pattern solve the problem?

## Implementation

### Prerequisites

- Requirement 1
- Requirement 2

### Steps

1. First step
2. Second step

### Code Example

\`\`\`bash
# Your code here
\`\`\`

## Benefits

- Benefit 1
- Benefit 2

## Use Cases

- Use case 1
- Use case 2

## Related Patterns

- [Related Pattern 1](/catalog/patterns/related-pattern)
```

#### 5. Write Your Pattern

Fill in all sections with detailed, accurate information:

- Use clear, concise language
- Include working code examples
- Add comments to explain complex parts
- Provide context and reasoning
- Link to external resources when helpful

#### 6. Test Your Pattern

Before submitting:

1. Build the site locally to check formatting:
   ```bash
   npm install
   npm run dev
   ```

2. Visit `http://localhost:4321` to preview your pattern

3. Verify all links work

4. Check that code examples are correct

5. Test the implementation in a clean environment

#### 7. Commit Your Changes

```bash
git add .
git commit -m "Add [Your Pattern Name] pattern"
```

#### 8. Push to Your Fork

```bash
git push origin pattern/your-pattern-name
```

#### 9. Create a Pull Request

1. Go to the [repository](https://github.com/moayadiorg/patterns)
2. Click "New Pull Request"
3. Select your branch
4. Fill in the PR template with:
   - Pattern description
   - Category and difficulty
   - Testing performed
   - Any special notes

### Review Process

After you submit a pull request:

1. **Automated checks** - CI/CD will verify the build succeeds
2. **Community review** - Other contributors may suggest improvements
3. **Maintainer review** - Core maintainers will review for quality
4. **Revisions** - You may need to make changes based on feedback
5. **Approval** - Once approved, your pattern will be merged
6. **Publication** - Your pattern will appear on the site

## Improving Existing Patterns

To improve an existing pattern:

1. Follow the same fork and branch process
2. Make your improvements
3. Explain your changes in the PR description
4. Reference any issues your changes address

## Pattern Writing Guidelines

### Style Guide

- Use clear, simple language
- Write in present tense
- Use active voice
- Define technical terms
- Keep sentences concise

### Code Examples

- Provide complete, working examples
- Include comments explaining key parts
- Use consistent formatting
- Follow language-specific conventions
- Test all code before submitting

### Diagrams

- Use standard notation (UML, C4, etc.)
- Keep diagrams simple and focused
- Provide high-quality images
- Include source files if possible (draw.io, etc.)

### Links and References

- Link to official documentation
- Cite sources for claims
- Use stable URLs
- Check that all links work

## Community Standards

### Code of Conduct

- Be respectful and professional
- Welcome newcomers
- Give constructive feedback
- Assume good intentions
- Help others learn and grow

### Quality Standards

- Patterns must be tested and proven
- Documentation must be complete and accurate
- Code must follow best practices
- Examples must be production-ready

## Recognition

Contributors are recognized in several ways:

- Listed as pattern author in metadata
- Mentioned in release notes
- Featured in community highlights
- GitHub contributor badge

## Getting Help

Need help contributing?

- **GitHub Discussions** - Ask questions and get help
- **Issues** - Report bugs or request features
- **Pull Request Comments** - Get feedback during review

## Resources

- [Pattern Template](https://github.com/moayadiorg/patterns/blob/main/.github/PATTERN_TEMPLATE.md)
- [PR Template](https://github.com/moayadiorg/patterns/blob/main/.github/PULL_REQUEST_TEMPLATE.md)
- [Code of Conduct](https://github.com/moayadiorg/patterns/blob/main/CODE_OF_CONDUCT.md)

## Thank You!

Your contributions help the entire community. Thank you for sharing your knowledge and expertise!
