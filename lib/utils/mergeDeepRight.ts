/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-prototype-builtins */
export function mergeDeepRight<T extends Record<string, any>, U extends Record<string, any>>(
  obj1: T,
  obj2: U
): T & U {
  if (typeof obj1 !== 'object' || obj1 === null) return obj2 as T & U
  if (typeof obj2 !== 'object' || obj2 === null) return obj1 as T & U

  const result: Record<string, any> = { ...obj1 }

  for (const key in obj2) {
    if (obj2.hasOwnProperty(key)) {
      result[key] = mergeDeepRight(result[key], obj2[key])
    }
  }

  return result as T & U
}
