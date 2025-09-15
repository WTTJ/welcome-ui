/**
 * Preserve type intellisence and autocomplete on union like
 * type test = 'some string' | string
 *
 * @example
 * // The following type:
 * type color = 'red' | 'blue' | 'green' | string
 * // would be interpreted as
 * type color = string
 *
 * // Using LiteralUnion<T>
 * type color = LiteralUnion<'red' | 'blue' | 'green'>
 * // would be interpreted as
 * type color = 'red' | 'blue' | 'green'
 * // While still allowing any literal string
 * const bg: color = 'yellow'
 * const bg: color = '#FFF'
 */
export type LiteralUnion<T, U = string> = (Record<never, never> & U) | T
