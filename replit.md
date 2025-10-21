# Developer Tooling Template

## Overview

This is a blank starter repository configured with modern JavaScript development tools. It was imported from GitHub (codespaces-blank) and set up to run in the Replit environment.

**Purpose**: Provide a foundation for JavaScript/TypeScript projects with automated code quality checks and best practices.

**Current State**: Fully configured and running with a simple demo web server on port 5000.

## Recent Changes

_October 21, 2025_ - Initial Replit setup:

- Created ESLint v9 configuration file (eslint.config.mjs) compatible with the flat config format
- Installed missing TypeScript types (@commitlint/types) and Prettier
- Created example Node.js web server in src/index.js
- Configured workflow to run the server on port 5000
- Added package.json metadata (name, version, description, main entry point)

## Project Architecture

### Structure

```
.
├── .husky/              # Git hooks
│   ├── commit-msg       # Runs commitlint on commit messages
│   └── pre-commit       # Runs lint-staged before commits
├── src/
│   └── index.js         # Simple Node.js web server (example)
├── commitlint.config.ts # Conventional commits configuration
├── eslint.config.mjs    # ESLint v9 flat config
├── package.json         # Project metadata and dependencies
└── replit.md           # This file
```

### Configured Tools

1. **ESLint** - Code linting with plugins for:
   - JavaScript best practices
   - React hooks (eslint-plugin-react-hooks)
   - React Refresh (eslint-plugin-react-refresh)
2. **Prettier** - Opinionated code formatting

3. **Commitlint** - Enforces conventional commit message format:
   - Example: `feat: add new feature`, `fix: resolve bug`
   - Subject must be lowercase

4. **Husky** - Git hooks automation:
   - Pre-commit: Runs lint-staged
   - Commit-msg: Validates commit message format

5. **Lint-staged** - Runs linters only on staged files for performance

### Available Commands

- `npm start` - Start the example web server
- `npm run lint` - Run ESLint on all files
- `npm run format` - Format all files with Prettier

## Development Workflow

### Making Commits

The repository enforces conventional commits. Use this format:

```
<type>: <description>

[optional body]

[optional footer]
```

**Types**: feat, fix, docs, style, refactor, test, chore

**Example**:

```
feat: add user authentication
fix: resolve login redirect bug
docs: update readme with setup instructions
```

### Pre-commit Checks

When you commit, Husky automatically:

1. Runs ESLint on staged files
2. Formats code with Prettier
3. Validates commit message format

If any check fails, the commit is blocked until issues are fixed.

## Next Steps

This template is ready for building your application! Consider:

1. Replace the example server in `src/index.js` with your actual application code
2. Add additional dependencies as needed
3. Configure ESLint rules in `eslint.config.mjs` to match your preferences
4. Add Prettier configuration (.prettierrc) for custom formatting rules
5. Create additional git hooks in `.husky/` if needed

## User Preferences

_No specific preferences recorded yet_
