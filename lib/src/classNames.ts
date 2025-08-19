type ClassName<K extends string> = false | K | null | (string & {}) | undefined
type ClassNameArg<K extends string> =
  | ClassName<K>
  | ClassName<K>[]
  | { [key: string]: boolean | null | undefined } // fallback for tailwind/others
  | { [P in K]?: boolean | null | undefined } // autocomplete for module keys
type CSSModule = Record<string, string>

/**
 * A utility function to create a classNames function with a specific CSS module.
 * @param module The CSS module to use for class name resolution.
 * @returns A function that takes class names and returns the resolved class names.
 */
export function classNames(): (...args: ClassNameArg<string>[]) => string
export function classNames<C extends CSSModule>(
  module: C
): (...args: ClassNameArg<keyof C & string>[]) => string
export function classNames<C extends CSSModule>(module?: C) {
  return function (...classNames: ClassNameArg<keyof C & string>[]): string {
    const cx = new Set<string>()

    function _classNames(...args: ClassNameArg<keyof C & string>[]) {
      for (const arg of args) {
        if (!arg) continue

        if (typeof arg === 'string') {
          cx.add(module[arg] || arg)
        } else if (Array.isArray(arg)) {
          // Recursively resolve class names in the array
          _classNames(...arg)
        } else if (typeof arg === 'object') {
          for (const key in arg) {
            // Require the className to be truthy to add it to the set.
            // We make sure the className object has the hasOwnProperty prototype
            if (Object.prototype.hasOwnProperty.call(arg, key) && arg[key]) {
              cx.add(module[key] || key)
            }
          }
        }
      }
    }

    _classNames(...classNames)
    return Array.from(cx).join(' ')
  }
}
