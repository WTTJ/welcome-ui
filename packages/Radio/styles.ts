import styled, { css } from '@xstyled/styled-components'
import { Box } from '@welcome-ui/box'
import { componentSystem, shouldForwardProp, system } from '@welcome-ui/system'
import { defaultFieldStyles } from '@welcome-ui/utils'
import { Hint as HintWUI } from '@welcome-ui/hint'
import { Label as WUILabel } from '@welcome-ui/label'
import { Radio as ReakitRadio } from 'reakit/Radio'
import { th } from '@xstyled/system'

export const Radio = styled(ReakitRadio).withConfig({ shouldForwardProp })<{
  connected?: boolean
  order?: string
}>(
  ({ connected, order = '-1', theme }) => css`
    ${defaultFieldStyles({})};
    ${th('radios.default')}
    position: relative;
    padding: 0;
    order: ${order};
    cursor: pointer;
    border-radius: 50%;
    transition: medium;

    &[aria-checked='true'] {
      &::after {
        content: url(${`'data:image/svg+xml; utf8, <svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M10.113 1.273a1.085 1.085 0 011.526-.082c.433.386.481 1.041.118 1.485l-.035.04-7.245 8.01a1.083 1.083 0 01-1.474.126l-.047-.039-2.59-2.277A1.076 1.076 0 01.274 7.01a1.085 1.085 0 011.483-.126l.042.035 1.786 1.57 6.528-7.216z" fill="${theme.defaultFields.checkableField.checked.color}" /></svg>'`});
        position: absolute;
        top: 2px;
        right: 0;
        bottom: 0;
        left: 0;
        width: 12px;
        margin: auto;
        text-align: center;
        transition: medium;
      }

      &:not([disabled]) {
        ${th('radios.checked')};
      }
    }

    ${connected ? componentSystem : system};
  `
)

// force label to max width to 100% here, because if we add a styled system prop maxWidth {{ md: '30%' }} we need to have a max-width on mobile by default
export const Label = styled(WUILabel).withConfig({ shouldForwardProp })<{
  withHint?: boolean
}>(
  ({ withHint }) => css`
    ${withHint && th('radios.withHint.default')};
    max-width: 100%;
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

  > * {
    &:not(:last-child) {
      margin-right: xxs;
    }
  }
`
