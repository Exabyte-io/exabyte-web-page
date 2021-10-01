# syntax = docker/dockerfile:latest
FROM ghcr.io/bn-digital/docker/yarn:1.0.0 AS build
COPY . .
RUN yarn \
 && yarn build

FROM ghcr.io/bn-digital/docker/nodejs:1.0.0 AS cms
COPY --from=build --chown=node /usr/local/src/packages/cms .
CMD ["strapi", "start"]

FROM ghcr.io/bn-digital/docker/nodejs:1.0.0 AS website
COPY --from=build --chown=node /usr/local/src/packages/website/build .
