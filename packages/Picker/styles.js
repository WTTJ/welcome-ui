import styled, { css } from '@xstyled/styled-components'
import { componentSystem, filterFieldComponent, system } from '@welcome-ui/system'
import { Radio as ReakitRadio } from 'reakit/Radio'

export const Radio = styled(filterFieldComponent(ReakitRadio))(
  ({ connected }) => css`
    display: none;
    ${connected ? componentSystem : system};
  `
)
