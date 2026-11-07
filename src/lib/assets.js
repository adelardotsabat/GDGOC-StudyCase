const files = import.meta.glob('../assets/*.{svg,png,jpg,jpeg,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
})

// "../assets/logo-header.svg" -> { "logo-header": "/assets/....svg" }
const byName = Object.fromEntries(
  Object.entries(files).map(([path, url]) => [
    path.split('/').pop().replace(/\.[^.]+$/, ''),
    url,
  ]),
)

export const asset = (name) => byName[name] ?? null