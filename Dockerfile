# syntax = docker/dockerfile:latest
FROM dcr.bndigital.dev/library/yarn:1.0.0 AS build
COPY . .
RUN yarn \
 && yarn build

FROM dcr.bndigital.dev/library/nodejs:1.0.0 AS cms
COPY --from=build --chown=node /usr/local/src/packages/cms .
CMD ["strapi", "start"]

FROM dcr.bndigital.dev/library/nodejs:1.0.0 AS website
COPY --from=build --chown=node /usr/local/src/packages/website/build .
