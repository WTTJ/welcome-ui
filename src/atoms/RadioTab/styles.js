import styled, { css } from 'styled-components'

import { get, getCss } from '../../theme/helpers'
import { overflowEllipsis } from '../../common/styles/text'

//molecules
import { Label } from '../../molecules/Label/styles'

export const StyledRadioTab = styled.div`
  flex: 1;
`

export const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
`

const checkedStyles = css`
  color: ${get('color', 'primary', 'dark')};
  border-color: ${get('color', 'primary', 'default')};
  background-color: ${get('color', 'light', 'light')};
  box-shadow: ${get('boxShadow', 'xs')};
  z-index: 2;
`

const columnStyles = css`
  ${Label} {
    margin-top: -${get('borderWidth', 'input')};
  }

  &:first-child ${Label} {
    border-radius: ${get('radius', 'md')} ${get('radius', 'md')} 0 0;
    margin-top: 0;
  }

  &:last-child ${Label} {
    border-radius: 0 0 ${get('radius', 'md')} ${get('radius', 'md')};
  }
`

const rowStyles = css`
  ${Label} {
    margin-left: -${get('borderWidth', 'input')};
  }

  &:first-child ${Label} {
    border-radius: ${get('radius', 'md')} 0 0 ${get('radius', 'md')};
    margin-left: 0;
  }

  &:last-child ${Label} {
    border-radius: 0 ${get('radius', 'md')} ${get('radius', 'md')} 0;
  }
`

export const radioTabStyles = props => css`
  flex: 1;
  ${Label} {
    ${getCss('fields', 'default')};
    flex-grow: 1;
    position: relative;
    display: block;
    max-width: 100%;
    user-select: none;
    margin: 0;
    padding: ${get('gutter', 'xs')};
    padding-right: calc(${get('gutter', 'xs')} + ${get('borderWidth', 'input')});
    cursor: pointer;
    line-height: 1;
    text-align: center;
    transition: ${get('transition', 'sm')};
    border-radius: 0;
    ${overflowEllipsis};

    ${props.checked && checkedStyles};

    &:hover {
      box-shadow: ${get('boxShadow', 'xs')};
    }
  }

  ${props.direction === 'column' && columnStyles};
  ${props.direction === 'row' && rowStyles};
`
