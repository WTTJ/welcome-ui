import { CSSObject } from 'styled-components'
import { hexToRGBA } from '@welcome-ui/utils'

export type ThemeFocus = (color?: string) => CSSObject

export const getFocus =
  (color: string): ThemeFocus =>
  (value: string = color) => {
    return {
      boxShadow: `0 0 0 3px ${hexToRGBA(value, 0.5)}`,
    }
  }
