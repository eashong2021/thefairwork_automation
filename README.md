# E2e Tests

# Test Registry (Repor test)

See `/docs/test-registry.md`

# Installation

- `npm i`

# Usage

This test runs actually on your localhost server.  
Update and run in a separate terminal.  
Then:

1. Change the base-url  
   `/cypress/fixtures/shared/environment`
2. Clean if needed videos,screenshots or reports // todo: with script
   `/cypress/screenshots`
   `/cypress/reports`
3. Open Cypress  
   `npm run cy:open`
4. or Run the tests  
   manually or `npm run cy:run`

## ADVICE:

Some test just generate a screenshot, with no exprect check.
Directory: `cypress\screenshots`

# Repo Structure

## Data

`/cypress/fixtures`

## Spec files

`/cypress/integration/tests`

There are some other directories that contains tests:

- tests: only the test in this folder wild be listed in Cypress
- custom: own user test
- temp: temporary excluded test from cypress cycle.
  Move the test from inside this directory in the `/cypress/integration/tests`
  if you want to run it manually

### Open and Runner mode

**Test-files that the name begins** with the prefix `manual.` will be ignored in runner mode.
The reason is that runner mode doesnt support all viewPort sizes for the captures.

If you want just to check your test manually,
writing non-finished tests or some test not should be runned in pipelines,
add the prefix to skip it in the `cy:run` task.

## Screenshots

Directory: `cypress\screenshots`
Docs: `/docs/screenshots`

## Videos

Directory: `cypress\videos`
Docs: `/docs/videos`

# Cypress

Docs: `docs/cy.md`

# Reports

Directory: `cypress\reports`
Docs: `/docs/cy.md`
