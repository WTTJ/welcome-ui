import { defineTokens } from '@pandacss/dev'

export const easings = defineTokens.easings({
  slow: { value: 'cubic-bezier(0.41, 0.094, 0.54, 0.07)' },
  medium: { value: 'ease' },
  fast: { value: 'linear' },
})
