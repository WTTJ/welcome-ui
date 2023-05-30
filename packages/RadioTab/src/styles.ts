import styled, { css, system, th } from '@xstyled/styled-components'
import { Radio as ReakitRadio } from 'reakit'
import { shouldForwardProp } from '@welcome-ui/system'
import { defaultFieldStyles, DefaultFieldStylesProps, overflowEllipsis } from '@welcome-ui/utils'
import { WuiProps } from '@welcome-ui/system'

export const Radio = styled(ReakitRadio).withConfig({ shouldForwardProp })`
  position: absolute;
  top: 0;
  left: 0;
  visibility: hidden;
  ${system};
`

const columnStyles = css`
  margin-top: -${th.borderWidth('sm')};
  border-radius: 0;

  &:first-of-type {
    border-radius: md;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  &:last-of-type {
    border-radius: md;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
  }
`

const rowStyles = css`
  margin-left: -${th.borderWidth('sm')};
  border-radius: 0;

  &:first-of-type {
    border-radius: md;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  &:last-of-type {
    border-radius: md;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`

export const Label = styled.label<
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
    ${system};
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
