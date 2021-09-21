# syntax = docker/dockerfile:latest
FROM ghcr.io/bn-digital/docker/yarn:1.0.0 AS build
COPY .yarn .yarn
COPY package.json .yarnrc.yml yarn.lock ./
COPY packages/cms/package.json packages/cms/package.json
COPY packages/website/package.json packages/website/package.json
RUN yarn
COPY . .
RUN yarn build

FROM ghcr.io/bn-digital/docker/nodejs:1.0.0
COPY --from=build --chown=unit /usr/local/src/packages/cms packages/cms
COPY --from=build --chown=unit /usr/local/src/packages/website/build packages/website
COPY nginx.json /docker-entrypoint.d/unit.json
ENV PORT=1337
EXPOSE 8000
VOLUME ["/usr/local/src/packages/cms/.tmp"]
VOLUME ["/usr/local/src/packages/cms/public/uploads"]
