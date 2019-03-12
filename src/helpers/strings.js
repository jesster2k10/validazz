// eslint-disable-next-line import/prefer-default-export
export function hasText(text) {
  if (typeof text !== 'string') {
    return false
  }

  if (!text || text === '' || text === null || text === undefined) {
    return false
  }

  if (!/\S/.test(text)) {
    return false
  }

  return true
}
