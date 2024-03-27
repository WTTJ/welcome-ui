import { SystemProp, Theme } from '@wttj/xstyled-styled-components'

export const getMax = (
  width: SystemProp<string | number, Theme>,
  height: SystemProp<string | number, Theme> = width
): SystemProp<string | number, Theme> => {
  const typeToValueExtractor: Record<
    string,
    (value: SystemProp<string | number, Theme>) => number
  > = {
    string: (value: string) => parseInt(value, 10),
    number: (value: number): number => value,
  }
  const widthNumber =
    typeToValueExtractor[typeof width as keyof typeof typeToValueExtractor]?.(width) || 0
  const heightNumber =
    typeToValueExtractor[typeof width as keyof typeof typeToValueExtractor]?.(height) || 0
  const diff = widthNumber - heightNumber
  return diff >= 0 ? width : height
}
