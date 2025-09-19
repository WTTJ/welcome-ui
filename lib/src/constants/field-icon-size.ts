import type { DefaultFieldIconSize, Size } from '@/types'

export const FIELD_ICON_SIZE: {
  [key in Size]: DefaultFieldIconSize
} = {
  lg: 'sm',
  md: 'sm',
  sm: 'sm',
  xs: 'xs',
}
