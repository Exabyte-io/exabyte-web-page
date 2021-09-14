# syntax = docker/dockerfile:latest
FROM dcr.bndigital.dev/library/yarn:latest AS build
RUN yarn
COPY . .
RUN yarn build

FROM dcr.bndigital.dev/library/react:latest
COPY --from=build --chown=unit:unit /usr/local/src/build .