# Developer Tooling App
[![codecov](https://codecov.io/gh/oc-2/developer-tooling-app/graph/badge.svg?token=U49PGrRnaY)](https://codecov.io/gh/oc-2/developer-tooling-app)

## Overview

This is a repo configured with commit message enhancers.

## Project Architecture

### Structure

```
.
├── .husky/              
│   ├── commit-msg       
│   └── pre-commit       
├── src/
│   ├── index.js         
│   └── static/         
│       ├── index.html    
│       └── css/         
│           ├── styles.css         
│           ├── bootstrap.min.css    
│           └── font-awesome/**
├── commitlint.config.ts  
├── eslint.config.mjs     
├── package.json     
├── package-lock.json
└── README.md
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

6. **Jest** - Uses jest to test

### Available Commands

- `npm start` - Start the web server with nodemon (auto-reload on file changes)
- `npm run lint` - Run ESLint on all files
- `npm run format` - Format all files with Prettier
- `npm run commit` - Runs commitizen
- `npm run test` - Uses jest to test

### Pre-commit Checks

When you commit, Husky automatically:

1. Runs ESLint on staged files
2. Formats code with Prettier
3. Validates commit message format

If any check fails, the commit is blocked until issues are fixed.
