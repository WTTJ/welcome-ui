import styled, { css } from 'styled-components'
import { Radio as ReakitRadio } from 'reakit/Radio'
import { defaultFieldStyles, DefaultFieldStylesProps, overflowEllipsis } from '@welcome-ui/utils'
import { system, WuiProps } from '@welcome-ui/system'

export const Radio = styled(ReakitRadio)`
  position: absolute;
  top: 0;
  left: 0;
  visibility: hidden;
  ${system};
`

const columnStyles = css`
  margin-top: -${({ theme }) => theme.borderWidths.sm};
  border-radius: 0;

  &:first-of-type {
    border-radius: ${({ theme }) => theme.spaces.md};
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  &:last-of-type {
    border-radius: ${({ theme }) => theme.spaces.md};
    border-top-right-radius: 0;
    border-top-left-radius: 0;
  }
`

const rowStyles = css`
  margin-left: -${({ theme }) => theme.borderWidths.sm};
  border-radius: 0;

  &:first-of-type {
    border-radius: ${({ theme }) => theme.space.md};
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  &:last-of-type {
    border-radius: ${({ theme }) => theme.space.md};
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`

export const Label = styled.label<
  {
    checked?: boolean
    disabled?: boolean
    disabledIcon?: React.ReactElement
  } & DefaultFieldStylesProps &
    WuiProps
>(
  ({ $flexDirection, checked, size, theme, variant }) => css`
    ${theme.radioTabs.default};
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 0;
    min-height: ${theme.defaultFields.sizes[size].height};
    max-width: 100%;
    margin: 0;
    text-align: center;
    position: relative;
    cursor: pointer;
    transition: ${theme.transitions.medium};

    ${defaultFieldStyles({ size, variant })};
    ${checked &&
    css`
      ${theme.radioTabs.checked};
      z-index: 2;
    `};
    ${$flexDirection === 'column' && columnStyles};
    ${$flexDirection === 'row' && rowStyles};
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
