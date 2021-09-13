# syntax = docker/dockerfile:latest
FROM dcr.bndigital.dev/library/yarn:2bac136898e0a707389a223bbef12eb63c321c3a AS build
RUN yarn
COPY . .
RUN yarn build

FROM dcr.bndigital.dev/library/http:2bac136898e0a707389a223bbef12eb63c321c3a
COPY --from=build /usr/local/src/build .