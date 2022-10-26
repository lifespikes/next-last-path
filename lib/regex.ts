export const regex = {
  isDynamic: /\[([\w-]+)\]/g,
  isDotsDynamic: /\[\.{3}([\w-]+)\]/g,
  removeDots: /\.{3}/g,
  removeDynamic: /[\[\]]/g,
  removeDynamicFromPath: /\/\[\.\.\.[A-Za-z0-9]+\]/,
}
