export function isEmptyArray(array: any[]): boolean {
  if (!array || array.length === 0) return true
  return false
}

export function first(array: any[]): any {
  if (!isEmptyArray(array)) return array[0]
  return null
}
