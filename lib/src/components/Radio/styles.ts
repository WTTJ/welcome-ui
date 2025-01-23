import styled, { css, system, th } from '@xstyled/styled-components'
import * as Ariakit from '@ariakit/react'

import { defaultFieldStyles } from '../../utils/field-styles'

import { RadioProps } from './index'

import { Box } from '@/Box'
import { shouldForwardProp } from '@/System'
import { Label as WUILabel } from '@/Label'

/* /!\ WARNING /!\ Don't add style after pseudo selector, it won't apply because of the dynamic color injected in the fill of the content */

export const Radio = styled(Ariakit.Radio).withConfig({ shouldForwardProp })<RadioProps>(
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
export const Label = styled(WUILabel)`
  max-width: 100%;
  /** we need to reset margin-bottom from Label component */
  margin-bottom: 0 !important;
  ${system};
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

export const LabelWithHint = styled.div`
  display: flex;
  flex-direction: column;
`
