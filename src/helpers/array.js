// @flow

export function isEmptyArray(array: Array<any>): boolean {
  if (!array || array.length === 0) return true
  return false
}

export function first(array: Array<any>): any {
  if (!isEmptyArray(array)) return array[0]
  return null
}
