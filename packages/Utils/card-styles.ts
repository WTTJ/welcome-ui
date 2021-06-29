import { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'

export const cardStyles = (): ReturnType<typeof css> => css`
  ${th('defaultCards')};
`
