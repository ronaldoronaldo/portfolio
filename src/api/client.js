import ApolloClient from 'apollo-boost'
import { API_ENDPOINT } from 'config/vars'

const client = new ApolloClient({
  uri: API_ENDPOINT,
  fetchOptions: {
    credentials: 'include'
  },
  request: async operation => {
    const token = global.localStorage.getItem('combo-jwt')

    if (token) {
      operation.setContext({
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    }
  },
  onError: ({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      console.log('graphQLErrors', graphQLErrors)
    }

    if (networkError) {
      console.log('networkError', networkError)
    }
  },
  clientState: {
    defaults: {
      isConnected: true
    },
    resolvers: {
      Mutation: {
        updateNetworkStatus: (_, { isConnected }, { cache }) => {
          cache.writeData({ data: { isConnected } })
          return null
        }
      }
    }
  }
})

export default client
