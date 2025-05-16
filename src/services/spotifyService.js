export async function fetchTopTracks(token) {
  const response = await fetch('https://api.spotify.com/v1/me/top/tracks?limit=50', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  if (!response.ok) {
    throw new Error('Failed to fetch top tracks')
  }

  const data = await response.json()
  return data
}
