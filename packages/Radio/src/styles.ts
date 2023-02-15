import styled, { css, system, th } from '@xstyled/styled-components'
import { Box } from '@welcome-ui/box'
import { shouldForwardProp } from '@welcome-ui/system'
import { defaultFieldStyles } from '@welcome-ui/utils'
import { Hint as HintWUI } from '@welcome-ui/hint'
import { Label as WUILabel } from '@welcome-ui/label'
import { Radio as ReakitRadio } from 'reakit/Radio'

import { RadioProps } from './index'

/* /!\ WARNING /!\ Don't add style after pseudo selector, it won't apply because of the dynamic color injected in the fill of the content */

export const Radio = styled(ReakitRadio).withConfig({ shouldForwardProp })<RadioProps>(
  ({ order = '-1', size, variant }) => css`
    ${defaultFieldStyles({ size, variant })};
    ${th('radios.default')}
    position: relative;
    padding: 0;
    order: ${order};
    cursor: pointer;
    border-radius: 50%;
    transition: medium;
    ${system};

    &::after {
      content: '';
      position: absolute;
      width: 8;
      height: 8;
      border-radius: 8;
      top: 3;
      left: 3;
      background-color: transparent;
      transition: medium;
    }

    &[aria-checked='true'] {
      &:not([disabled]) {
        ${th('radios.checked')};
      }

      &[disabled] {
        &::after {
          background-color: ${th('radios.checkedCenteredColor.disabled')};
        }
      }

      &::after {
        background-color: ${th('radios.checkedCenteredColor.default')};
      }
    }
  `
)

// force label to max width to 100% here, because if we add a styled system prop maxWidth {{ md: '30%' }} we need to have a max-width on mobile by default
export const Label = styled(WUILabel)<{
  withHint?: boolean
}>(
  ({ withHint }) => css`
    ${withHint && th('radios.withHint.default')};
    max-width: 100%;
    align-items: flex-start;
    ${system}
  `
)

export const Hint = styled(HintWUI)`
  ${th('radios.withHint.hint')};
`

export const Input = styled.div`
  flex-shrink: 0;
  position: relative;
  align-items: center;
  display: flex;
`

export const Wrapper = styled(Box)`
  display: flex;
  align-items: flex-start;
  gap: sm;

  input {
    margin-top: xs;
  }
`
