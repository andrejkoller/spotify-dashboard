const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID
const redirectUri = import.meta.env.VITE_SPOTIFY_REDIRECT_URI
const scopes = ['user-top-read']

export function getSpotifyLoginUrl() {
  const authEndpoint = 'https://accounts.spotify.com/authorize'
  const scopeParam = scopes.join(' ')

  return `${authEndpoint}?client_id=${clientId}&response_type=token&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scopeParam)}`
}
