FROM cypress/base:14

ENV PROJECT_ROOT=/usr/src/app

RUN npm i -g cross-env

RUN mkdir -p $PROJECT_ROOT && chown -R 1000:1000 $PROJECT_ROOT

USER 1000
WORKDIR $PROJECT_ROOT

COPY --chown=1000:1000 package.json package.json
COPY --chown=1000:1000 package-lock.json package-lock.json

RUN npm i

COPY --chown=1000:1000 ./lib ./lib
COPY --chown=1000:1000 ./output-data ./output-data
COPY --chown=1000:1000 ./cypress ./cypress
COPY --chown=1000:1000 ./cypress.json ./cypress.json
COPY --chown=1000:1000 ./cypress-runner.js ./cypress-runner.js
COPY --chown=1000:1000 ./cypress-run-ci.json ./cypress-run-ci.json
COPY --chown=1000:1000 ./configs ./configs

CMD ["npm", "run", "cy:runci"]
