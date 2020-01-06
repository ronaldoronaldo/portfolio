// Get environment variables if exist
const { FRONT_END_GRAPHQL_ENDPOINT, ARVORE_ENDPOINT, GUTEN_ENDPOINT } = process
  ? process.env
  : {}

export const LOGIN_JWT = 'combo-jwt'

export const API_ENDPOINT = FRONT_END_GRAPHQL_ENDPOINT
  ? FRONT_END_GRAPHQL_ENDPOINT
  : '/graphql'

export const ARVORE_URL = ARVORE_ENDPOINT
  ? ARVORE_ENDPOINT
  : 'http://beta-legacy.arvoredelivros.com.br:5007'

export const GUTEN_URL = GUTEN_ENDPOINT
  ? GUTEN_ENDPOINT
  : 'https://homologa.gutennews.com.br'
