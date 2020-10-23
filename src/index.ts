/**
 * extract the key of the enum
 * @param enums 
 */
export const extractKeys = (enums: any): string[] => {
  return <string[]>Object.keys(enums).filter((key) => isNaN(<any>key))
}
/**
 * extract the values of the enum
 * @param enums 
 */
export const extractValue = (enums: any): any[] => {
  // get enum keys
  const enumKeys = extractKeys(enums)
  // then map the array keys and then put it thru elem of enum
  return enumKeys.map((key) => enums[key])
}
export default {
/**
 * extract the key of the enum
 * @param enums 
 */
  keys: extractKeys,
  /**
 * extract the values of the enum
 * @param enums 
 */
  values: extractValue
}