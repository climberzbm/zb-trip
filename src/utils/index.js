export const getAssetsUrl = (url) => {
  return new URL(`../assets` + url, import.meta.url)
}
