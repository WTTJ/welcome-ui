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
  ({ order = '-1', size, theme, variant }) => css`
    ${defaultFieldStyles({ size, variant })};
    ${th('radios.default')}
    position: relative;
    padding: 0;
    order: ${order};
    cursor: pointer;
    border-radius: 50%;
    transition: medium;
    ${system};

    &[aria-checked='true'] {
      &:not([disabled]) {
        ${th('radios.checked')};
      }

      &::after {
        content: url(${`'data:image/svg+xml; utf8, <svg viewBox="0 0 10 8" xmlns="http://www.w3.org/2000/svg"><path fill="${theme.defaultFields.checkableField.checked.color}" d="M7.96171 0.596898C8.24912 0.27893 8.74024 0.25262 9.06024 0.537743C9.37208 0.815607 9.40671 1.28712 9.14514 1.60662L9.11975 1.63611L3.90331 7.40311C3.75365 7.5687 3.54304 7.66003 3.32401 7.66003C3.15017 7.66003 2.98077 7.60235 2.84241 7.49383L2.80848 7.46564L0.943652 5.82577C0.620151 5.54147 0.590221 5.04928 0.877091 4.72749C1.15398 4.41772 1.62383 4.38076 1.94536 4.6368L1.97506 4.66166L3.26156 5.79276L7.96171 0.596898Z" /></svg>'`});
        position: absolute;
        top: -2px;
        right: 0;
        bottom: 0;
        left: 0;
        width: 10px;
        margin: auto;
        text-align: center;
        transition: medium;
      }
    }
  `
)

// force label to max width to 100% here, because if we add a styled system prop maxWidth {{ md: '30%' }} we need to have a max-width on mobile by default
export const Label = styled(WUILabel).withConfig({ shouldForwardProp })<{
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
  align-items: center;
  gap: sm;

  > * {
    &:not(:last-child) {
      margin-right: xxs;
    }
  }
`
