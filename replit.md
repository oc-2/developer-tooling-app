# Developer Tooling App

## Overview

This is a Node.js web server application configured with comprehensive developer tooling for code quality, formatting, and git workflow automation. The application runs a simple HTTP server on port 5000 and demonstrates best practices for modern JavaScript development with automated linting, formatting, and conventional commit enforcement.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Runtime Environment
- **Platform**: Node.js (CommonJS modules)
- **Server**: Native Node.js HTTP server
- **Hot Reload**: Nodemon for automatic server restarts during development
- **Port**: 5000 (bound to 0.0.0.0 for network accessibility)

**Rationale**: Uses Node.js native HTTP module for minimal dependencies and maximum simplicity. Nodemon provides developer experience improvements without affecting production deployment.

### Code Quality & Formatting

**ESLint v9 (Flat Config)**
- Uses modern flat configuration format (eslint.config.mjs)
- Configured plugins: React Hooks and React Refresh (for future React integration)
- **Rationale**: ESLint v9's flat config provides better performance and simpler configuration management. React plugins are pre-configured for potential frontend expansion.

**Prettier**
- Opinionated code formatter for consistent style across all file types
- Configured for: JavaScript, TypeScript, JSON, CSS, Markdown
- **Rationale**: Eliminates style debates and ensures consistent formatting across the team.

**Lint-staged**
- Runs linters only on staged Git files
- **Rationale**: Performance optimization - only checks files that are being committed rather than the entire codebase.

### Git Workflow Automation

**Husky Git Hooks**
- Pre-commit hook: Triggers lint-staged to validate code before commits
- Commit-msg hook: Validates commit message format via commitlint
- **Rationale**: Enforces quality gates before code enters version control, preventing bad code and poorly formatted commits from being shared.

**Commitlint**
- Enforces Conventional Commits specification
- Custom rule: Subject must be lowercase
- Format: `type(scope): description` (e.g., `feat: add new feature`, `fix: resolve bug`)
- **Rationale**: Standardized commit messages enable automated changelog generation, semantic versioning, and better project history readability.

**Commitizen**
- Interactive commit message builder
- Path: cz-conventional-changelog
- **Rationale**: Provides guided prompts for creating conventional commits, reducing errors and improving developer experience.

### Development Workflow

1. Developer makes code changes
2. On `git add`, files are staged
3. On `git commit`:
   - Pre-commit hook runs lint-staged (ESLint + Prettier on staged files)
   - Developer writes commit message
   - Commit-msg hook validates message format via commitlint
4. If all checks pass, commit is created

**Available Commands**:
- `npm start` - Launch development server with auto-reload
- `npm run lint` - Run ESLint across entire codebase
- `npm run format` - Format all files with Prettier

## External Dependencies

### Development Tools

**Linting & Formatting**:
- `eslint` (^9.30.1) - JavaScript/TypeScript linter
- `@eslint/js` (^9.30.1) - ESLint JavaScript configurations
- `eslint-plugin-react-hooks` (^5.2.0) - React Hooks rules
- `eslint-plugin-react-refresh` (^0.4.20) - React Fast Refresh rules
- `prettier` (^3.6.2) - Code formatter

**Commit Management**:
- `@commitlint/cli` (^19.8.1) - Commit message linter
- `@commitlint/config-conventional` (^19.8.1) - Conventional commits preset
- `commitizen` (^4.3.1) - Interactive commit tool
- `cz-conventional-changelog` (^3.0.1) - Conventional commits adapter

**Git Automation**:
- `husky` (^9.1.7) - Git hooks manager
- `lint-staged` (^16.1.2) - Staged files linter runner

**Development Server**:
- `nodemon` (^3.1.10) - Auto-restart development server

### Runtime Requirements

**Node.js Version**: ^18.18.0 || ^20.9.0 || >=21.1.0

**Note**: All dependencies are development dependencies. The application itself has zero runtime dependencies, using only Node.js native modules.