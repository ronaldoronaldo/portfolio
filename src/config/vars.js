// Get environment variables if exist
const {
  FRONT_END_GRAPHQL_ENDPOINT,
  ARVORE_ENDPOINT,
  GUTEN_ENDPOINT,
  GUTEN_DEV
} = process ? process.env : {}

export const LOGIN_JWT = 'combo-jwt'
export const COMBO_PRODUCTS = 'combo-products'
export const PROVIDER = 'provider'

export const PLATFORM = ['ARVORE', 'GUTEN']

export const API_ENDPOINT = FRONT_END_GRAPHQL_ENDPOINT
  ? FRONT_END_GRAPHQL_ENDPOINT
  : '/graphql'

export const ARVORE_URL = ARVORE_ENDPOINT
  ? ARVORE_ENDPOINT
  : 'http://beta-legacy.arvoredelivros.com.br:5007'

export const GUTEN_URL = GUTEN_ENDPOINT
  ? GUTEN_ENDPOINT
  : 'https://homologa.gutennews.com.br'

export const GUTEN_URL_PROD_SUF = GUTEN_DEV
  ? 'gutten-news/guten-news-web/backend'
  : 'producao-gutennews/backend'

//guten homolog url 'https://homologa.gutennews.com.br'
