# Coverage Issue: heapOutOfMemory 
While being used with jest --coverage on Docker with workflows.
for issue : https://github.com/facebook/jest/issues/12541#issue-1158522714

## Branches:
### Main
Workflow: test-memoryError => Original Heap Out of Memory Error

Workflow: test-works => See solution A below
### v8-coverage-error
Provides better error messaging

Workflow: test-memoryError => /opt/ folder culprit visible

### solution-b
See solution B below

Workflow: test-memoryError => Now working

### solution-c
See solution C below

Workflow: test-memoryError => Now working

## Solutions
Solution A: Do not use Docker at all for running jest tests, just use npm on workflows. Docker is unecessary for me here and I missed this obvious fix.

Solution B:  Keep using docker but use a working directory `WORKDIR '/app'` in your dockerfile and then reference it in jest.config.js `roots: ['../', '/app']`.

Solution C: Add `coveragePathIgnorePatterns: ['/opt/']` in jest.config.js.

REF
[Issue 5837 on Jest](https://github.com/facebook/jest/issues/5837)
[Issue 9980 on Jest](https://github.com/facebook/jest/issues/9980)
