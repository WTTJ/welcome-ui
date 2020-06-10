import { css } from '@xstyled/styled-components'
import { getVariantColor } from '@welcome-ui/utils'

export const filedrops = {
  default: css`
    border-style: dashed;
    min-height: 200;
  `,
  dragAccept: css``,
  dragReject: css`
    border-color: ${getVariantColor('error')};
  `,
  disabled: css``
}
