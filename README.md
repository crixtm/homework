# Test automation project example

This repository contains a Playwright-based end-to-end test automation solution written in TypeScript. It uses Playwright Test as the test runner and supports running tests from the command line, in UI mode, and with HTML reports. 

## Stack

- Playwright
- TypeScript
- Page Object Model
- Custom fixtures
- Data-driven test structure

## Project structure

```text
.github/workflows/      CI workflow definitions
fixtures/               Shared Playwright fixtures
pages/                  Page Objects and page-specific actions
tests/                  Test specifications
playwright.config.ts    Playwright configuration
package.json            Project scripts and dependencies
```

## Prerequisites

- Node.js installation
- NVM recommended

## Installation

```bash
npm install
npx playwright install
```

## Running tests

Run the full test suite:

```bash
npx playwright test
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Also recommended for test development purposes to install the Playwright Test for VS Code plugin.

## Reports

After a test run, Playwright can open the HTML report with the built-in report command. 

```bash
npx playwright show-report
```

## Test architecture

This project is organized around a few core patterns:

- **Page Objects** keep selectors and page actions in dedicated classes, which is a common Playwright pattern for reusable UI interactions. 
- **Fixtures** centralize reusable setup logic such as page initialization, cookie handling, or shared test objects. 
- **Data-driven tests** can iterate through arrays of test data to generate multiple test cases from one test implementation. 

## Improvement steps

Currently, the user data is stored in a test file, but these are completely dummy users. In the future, the credentials should be stored in `.env` files and/or GitHub Secrets instead of the codebase. Using environment variables for sensitive data is a common and recommended approach in Playwright and Node.js projects. 

## Additional documents 
This folder contains the additional documents:
- Example test cases
- Example bug report
