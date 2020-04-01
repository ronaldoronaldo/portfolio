import ApolloClient from 'apollo-boost'
import { API_ENDPOINT, LOGIN_JWT } from 'config/vars'
import { LOGIN_PATH } from 'routes'

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

      const unauthorized = graphQLErrors.find(
        graphqlError =>
          graphqlError.extensions &&
          graphqlError.extensions.status_code === 'unauthorized'
      )

      if (unauthorized) {
        localStorage.removeItem(LOGIN_JWT)
        global.alert('Sua sessão expirou, por favor faça login novamente.')
        global.location = LOGIN_PATH
      }
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
