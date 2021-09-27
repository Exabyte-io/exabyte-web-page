import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { FC, useMemo } from 'react'

const API: FC = ({ children }) => {
  const client = useMemo(
    () =>
      new ApolloClient({
        uri: '/graphql',
        cache: new InMemoryCache({ resultCaching: process.env.NODE_ENV === 'production' }),
        connectToDevTools: process.env.NODE_ENV !== 'production',
      }),
    [],
  )

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export { API }
