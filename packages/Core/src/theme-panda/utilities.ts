import type { UtilityConfig } from '@pandacss/types'

export const utilities: UtilityConfig = {
  transition: {
    property: 'transition',
    className: 'wui-transition',
    values: ['slow', 'medium', 'fast'],
    transform: (value: string, { token }) => {
      switch (value) {
        case 'slow':
          return { transition: `${token('durations.slow')} ${token('easings.slow')}` }
        case 'medium':
          return { transition: `${token('durations.medium')} ${token('easings.medium')}` }
        case 'fast':
          return { transition: `${token('durations.fast')} ${token('easings.fast')}` }
        default:
          return { transition: value }
      }
    },
  },
}
