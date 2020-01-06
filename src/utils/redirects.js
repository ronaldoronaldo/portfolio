import { ARVORE_URL, GUTEN_URL } from 'config/vars'
import { LOGIN_PATH } from 'routes'

const token = localStorage.getItem('combo-jwt')

const redirectToPlatform = (platform, redirectTo) => {
  if (!token) {
    return (global.location = LOGIN_PATH)
  }

  const arvoreUrl = redirectTo
    ? `${ARVORE_URL}/landing_combo?jwt_combo=${token}&url=${`${ARVORE_URL}${redirectTo}`}`
    : `${ARVORE_URL}/landing_combo?jwt_combo=${token}&url=${encodeURIComponent(
        `${ARVORE_URL}/biblioteca`
      )}`
  const gutenUrl = redirectTo
    ? `${gutenUrl}${redirectTo}`
    : `${GUTEN_URL}/gutten-news/guten-news-web/backend/public/api/oauth/landing-combo?jwt_combo=${token}
          &url=${encodeURIComponent(`${GUTEN_URL}`)}`

  if (platform === 'arvore') return (global.location = arvoreUrl)

  if (platform === 'guten') return (global.location = gutenUrl)
}

export { redirectToPlatform }
