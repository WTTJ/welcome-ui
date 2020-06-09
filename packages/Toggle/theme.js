import { css } from '@xstyled/styled-components'

// To allow for line-height of text in label
const LINE_HEIGHT_ADJUSTMENTS = '0.15rem'

export const toggles = {
  item: {
    default: css`
      width: 34;
      height: 18;
      border-radius: 9;
      background-color: light.900;
      border-color: light.800;
      border-width: sm;
      border-style: solid;
      margin-top: ${LINE_HEIGHT_ADJUSTMENTS};

      &:focus {
        border-color: primary.500;
      }
    `,
    checked: css`
      background-color: primary.500;
      border-color: primary.500;
    `,
    disabled: css`
      border-color: nude.700;
      background-color: nude.500;
    `
  },
  after: {
    default: css`
      width: 14;
      height: 14;
      background-color: light.900;
      border-color: light.500;
      border-width: sm;
      border-style: solid;
      border-radius: 50%;
    `,
    checked: css`
      background-color: light.900;
      border-color: light.900;
    `,
    disabled: css`
      border-color: nude.700;
      background-color: nude.700;
    `
  }
}
