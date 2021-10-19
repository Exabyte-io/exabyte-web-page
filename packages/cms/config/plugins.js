module.exports = ({ env }) => ({
  graphql: {
    endpoint: '/graphql',
    shadowCRUD: true,
    playgroundAlways: env('NODE_ENV', 'development') === 'development',
    depthLimit: 7,
    amountLimit: 100,
    apolloServer: {
      tracing: env('NODE_ENV', 'development') === 'development',
    },
  },
  upload: {
    provider: 'local',
  },
  email: {
    provider: 'sendmail',
    settings: {
      defaultFrom: env('MAIL_FROM', `info@${env('DOMAIN', 'exabyte.io')}`),
      defaultReplyTo: env('MAIL_TO', `no-reply@${env('DOMAIN', 'exabyte.io')}`),
    },
  },
})
