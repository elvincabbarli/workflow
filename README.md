# Workflow

This folder contains a GitHub Actions workflow for validating the Node.js
project.

## CI checks

[`test.yml`](.github/workflows/test.yml) runs on every push and pull request.
The job uses Ubuntu, Node.js 24, and read-only repository contents permission.
It performs these checks in order:

1. Installs dependencies with `npm ci`.
2. Runs ESLint with `npm run lint`.
3. Runs the test suite with `npm test`.
4. Creates the production bundle with `npm run build`.

The workflow must complete successfully before the change is considered
validated.

## Run the same checks locally

Use Node.js 24 or a compatible version, then run:

```bash
npm ci
npm run lint
npm test
npm run build
```

## Project files

- `.github/workflows/test.yml` — CI workflow definition.
- `sum.js` — source module.
- `sum.test.js` — Node.js test suite.
- `package.json` — scripts and development dependencies.
