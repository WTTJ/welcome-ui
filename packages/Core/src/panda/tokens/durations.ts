import { defineTokens } from '@pandacss/dev'

export const durations = defineTokens.durations({
  slow: { value: '500ms' },
  medium: { value: '300ms' },
  fast: { value: '100ms' },
})
