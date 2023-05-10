# Provet Challenge

Why not Page Object?

## Prerequisites

- Node >= 8.10
- NPM >= 5.6
- Git
- Docker

## Getting started

1. Clone the project repository
2. Install all dependencies `npm install`

## How to Run

**Run E2E Tests**:

```
npm run test:e2e
```

**Open Cypress from the project root**: with this you can navigate using Cypress tool

```
npm run cy:open
```

**Run E2E Tests Using Docker**:
Make sure your Docker is up and running

```
npm run test:e2e:docker
```

**Run Lint Tests**:

```
npm run lint
```

**Fix Lint Issues**:

```
npm run lint:fix
```

## Report

The report is generated when running the E2E tests `npm run test:e2e` and it can be found on the _./cypress/reports/report.html_. In case of failure the report is attaching a screenshot of the page. Also a video is created in: _./cypress/videos_.
