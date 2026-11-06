const BASE_URL = 'https://gdgoc-ugm-api.vercel.app/api'

async function request(path, { signal } = {}) {
  const res = await fetch(`${BASE_URL}${path}`, { signal })
  if (!res.ok) throw new Error(`Request failed (${res.status})`)

  const json = await res.json()
  if (json.success === false) throw new Error('The server returned an error')

  return json.data
}

export const getTracks = (opts) => request('/tracks', opts)
export const getFormats = (opts) => request('/formats', opts)
export const getJourney = (opts) => request('/journey', opts)
export const getValues = (opts) => request('/values', opts)
export const getRoles = (opts) => request('/roles', opts)