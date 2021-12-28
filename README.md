# Coverage Issue: heapOutOfMemory 
While being used with jest --coverage on Docker with workflows.

Solution A: Do not use Docker at all for running jest tests, just use npm on workflows. Docker is unecessary for me here and I missed this obvious fix.

Solution B:  Keep using docker but use a working directory `WORKDIR '/app'` in your dockerfile and then reference it in jest.config.js `roots: ['../', '/app']`.

Solution C: Add `ignoreCoveragePathPatterns: ['/opt/']` in jest.config.js.

REF
[Issue 5837 on Jest](https://github.com/facebook/jest/issues/5837)
[Issue 9980 on Jest](https://github.com/facebook/jest/issues/9980)
