import { hexToRGBA } from '@welcome-ui/utils'
import { CSSObject } from '@xstyled/system'

export type ThemeFocus = (color?: string) => {
  boxShadow: CSSObject['boxShadow']
}

export const getFocus =
  (color: string): ThemeFocus =>
  (value: string = color) => {
    return {
      boxShadow: `0 0 0 3px ${hexToRGBA(value, 0.5)}`,
    }
  }
