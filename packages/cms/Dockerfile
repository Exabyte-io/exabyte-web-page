# syntax = docker/dockerfile:latest
FROM dcr.bndigital.dev/library/yarn:latest AS build
RUN yarn
COPY . .
RUN yarn vault-env --dist=".env.${ENV:-dist}" \
 && yarn build

FROM dcr.bndigital.dev/library/http:latest
COPY --from=build /usr/local/src .
ENTRYPOINT ["yarn"]
CMD ["strapi", "start"]