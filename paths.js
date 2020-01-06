const path = require('path')
const {
  FRONT_END_GRAPHQL_ENDPOINT,
  GUTEN_ENDPOINT,
  ARVORE_ENDPOINT
} = process.env

module.exports = {
  SRC: path.resolve(__dirname, '../src'),
  OUTPUT: path.resolve(__dirname, '../../priv/static'),
  EXTERNAL_PATHS: {
    FRONT_END_GRAPHQL_ENDPOINT: FRONT_END_GRAPHQL_ENDPOINT
      ? JSON.stringify(FRONT_END_GRAPHQL_ENDPOINT)
      : null,
    GUTEN_ENDPOINT: GUTEN_ENDPOINT ? JSON.stringify(GUTEN_ENDPOINT) : null,
    ARVORE_ENDPOINT: ARVORE_ENDPOINT ? JSON.stringify(ARVORE_ENDPOINT) : null
  }
}
