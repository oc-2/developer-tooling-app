# Developer Tooling Template

## Overview

This is a JavaScript/TypeScript starter template configured with modern development tooling for code quality, formatting, and git workflow automation. The repository provides a foundation for building web applications with automated linting, formatting, and commit message validation. Currently includes a simple Node.js HTTP server as a demonstration.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Core Technology Stack

**Runtime Environment**: Node.js (CommonJS modules)
- **Rationale**: Standard Node.js environment provides compatibility and straightforward execution
- **Entry Point**: `src/index.js` - Simple HTTP server listening on port 5000

### Code Quality and Formatting

**Linting Strategy**: ESLint v9 with flat config
- **Configuration**: `eslint.config.mjs` using modern flat config format
- **Plugins**: React-specific linting (react-hooks, react-refresh) pre-configured for React projects
- **Rationale**: ESLint v9 flat config provides simpler, more intuitive configuration compared to legacy .eslintrc
- **Trade-offs**: Requires ESLint 9.0.0+ as peer dependency; older plugins may need updates

**Code Formatting**: Prettier
- **Approach**: Opinionated, zero-configuration formatting
- **Integration**: Works alongside ESLint via lint-staged
- **Rationale**: Eliminates style debates and ensures consistency across contributors

### Git Workflow Automation

**Commit Message Enforcement**: Commitlint with Conventional Commits
- **Configuration**: `commitlint.config.ts` enforcing lowercase subjects
- **Standard**: Follows conventional commits spec (feat:, fix:, chore:, etc.)
- **Rationale**: Enables automated changelog generation and semantic versioning
- **Interactive Mode**: Commitizen (cz-conventional-changelog) available for guided commit creation

**Git Hooks**: Husky v9
- **Pre-commit Hook**: Triggers lint-staged to validate code before commits
- **Commit-msg Hook**: Validates commit message format via commitlint
- **Rationale**: Catches issues early in development workflow, preventing problematic commits

**Staged File Processing**: Lint-staged
- **Scope**: Runs ESLint and Prettier only on staged files (*.js, *.jsx, *.ts, *.tsx, *.json, *.css, *.md)
- **Performance**: Avoids checking entire codebase on every commit
- **Trade-offs**: Only validates staged changes; full codebase linting requires manual `npm run lint`

### Project Structure Philosophy

**Minimal Baseline Approach**:
- Single source directory (`src/`) for application code
- Configuration files at root for tool discoverability
- No framework lock-in; template supports both vanilla JS and React projects
- **Rationale**: Maximum flexibility for different project types while maintaining consistent tooling

## External Dependencies

### Development Tooling

**Core Linting and Formatting**:
- `eslint` (^9.30.1) - JavaScript/TypeScript linting engine
- `@eslint/js` (^9.30.1) - ESLint recommended configurations
- `prettier` (^3.6.2) - Code formatter

**React-Specific Plugins**:
- `eslint-plugin-react-hooks` (^5.2.0) - Enforces React Hooks rules
- `eslint-plugin-react-refresh` (^0.4.20) - Validates Fast Refresh compatibility

**Commit Workflow**:
- `@commitlint/cli` (^19.8.1) - Commit message linter
- `@commitlint/config-conventional` (^19.8.1) - Conventional commits preset
- `@commitlint/types` (^20.0.0) - TypeScript type definitions for commitlint
- `commitizen` (^4.3.1) - Interactive commit message CLI
- `cz-conventional-changelog` (^3.3.0) - Commitizen adapter for conventional commits

**Git Hooks and Automation**:
- `husky` (^9.1.7) - Git hooks manager
- `lint-staged` (^16.1.2) - Pre-commit file processor

### Runtime Dependencies

**Node.js Built-in Modules**:
- `http` - Web server (no external dependencies required for demo)

**Note**: This template has minimal runtime dependencies by design. Projects built on this template will add their own framework dependencies (React, Express, etc.) as needed.