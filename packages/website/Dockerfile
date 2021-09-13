# syntax = docker/dockerfile:latest
FROM dcr.bndigital.dev/library/nodejs:2bac136898e0a707389a223bbef12eb63c321c3a AS build
RUN yarn
COPY . .
RUN yarn build

FROM dcr.bndigital.dev/library/http:latest
WORKDIR /usr/local/src
COPY --from=build /usr/local/src/build .
CMD ["--single"]
