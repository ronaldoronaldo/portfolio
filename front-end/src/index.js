import React from 'react'
import ReactDOM from 'react-dom'
import client from './api/client'
import { ApolloProvider } from 'react-apollo'
import * as reducers from 'ducks/index'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { GlobalStyle } from 'styles/global'
import Routes from './routes'

const store = createStore(
  combineReducers({ ...reducers }),
  {} // initial state
)

ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <Routes />
      <GlobalStyle />
    </ApolloProvider>
  </Provider>,
  document.getElementById('root')
)
