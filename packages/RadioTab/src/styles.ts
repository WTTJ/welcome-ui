import styled, { css, th } from '@xstyled/styled-components'
import * as Ariakit from '@ariakit/react'
import { defaultFieldStyles, DefaultFieldStylesProps, overflowEllipsis } from '@welcome-ui/utils'
import { shouldForwardProp, type WuiProps } from '@welcome-ui/system'

export const Radio = styled(Ariakit.Radio).withConfig({ shouldForwardProp })`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
`

const columnStyles = css`
  margin-top: -${th.borderWidth('sm')};

  &:first-of-type {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  &:last-of-type {
    border-top-right-radius: 0;
    border-top-left-radius: 0;
  }
`

const rowStyles = css`
  margin-left: -${th.borderWidth('sm')};

  &:first-of-type {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  &:last-of-type {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`

export const Label = styled.labelBox<
  {
    checked?: boolean
    flexDirection?: WuiProps['flexDirection']
    disabled?: boolean
    disabledIcon?: React.ReactElement
  } & DefaultFieldStylesProps
>(
  ({ checked, flexDirection, size, variant }) => css`
    ${th('radioTabs.default')};
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 0;
    min-height: ${th(`defaultFields.sizes.${size}.height`)};
    max-width: 100%;
    margin: 0;
    text-align: center;
    position: relative;
    cursor: pointer;
    transition: medium;

    ${defaultFieldStyles({ size, variant })};
    ${checked &&
    css`
      ${th('radioTabs.checked')};
      z-index: 2;
    `};
    ${flexDirection === 'column' && columnStyles};
    ${flexDirection === 'row' && rowStyles};
    padding-top: 0;
    padding-bottom: 0;
  `
)

export const Input = styled.div`
  flex-shrink: 0;
  position: relative;
`

export const Content = styled.div`
  ${overflowEllipsis};
  max-width: 100%;
`
