# syntax = docker/dockerfile:latest
FROM ghcr.io/bn-digital/docker/yarn:1.0.0 AS build
COPY . .
ARG profile="staging"
ARG token=""
ARG endpoint=""
ENV VAULT_ENDPOINT=${endpoint}
ENV GITHUB_TOKEN=${token}
RUN yarn \
 && yarn build

FROM dcr.bndigital.dev/library/nodejs:latest AS cms
COPY --from=build /usr/local/src/packages/cms .
ENTRYPOINT ["yarn"]
CMD ["strapi", "start"]

FROM ghcr.io/bn-digital/docker/html:1.0.0 AS website
COPY --from=build /usr/local/src/packages/website/build .
