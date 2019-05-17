import styled, { css } from 'styled-components'

import { get, getCss } from '../../theme/helpers'
import { overflowEllipsis } from '../../common/styles/text'
// common form styles
import { fieldTypeStyles } from '../../common/styles/form'
import { StyledLabel } from '../Label/styles'

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
  ${getCss('fields.radiotabs.checked')};
  -webkit-text-stroke-width: 0.5px;
  box-shadow: ${get('boxShadow.xs')};
  z-index: 2;
  &:hover {
    color: transparent;
  }
`

const columnStyles = css`
  margin-top: -${get('borderWidth.input')};

  &:first-child {
    margin-top: 0;

    ${StyledLabel} {
      border-radius: ${get('radii.md')} ${get('radii.md')} 0 0;
    }
  }

  &:last-child ${StyledLabel} {
    border-radius: 0 0 ${get('radii.md')} ${get('radii.md')};
  }
`

const rowStyles = css`
  margin-left: -${get('borderWidth.input')};

  &:first-child {
    margin-left: 0;

    ${StyledLabel} {
      border-radius: ${get('radii.md')} 0 0 ${get('radii.md')};
    }
  }

  &:last-child ${StyledLabel} {
    border-radius: 0 ${get('radii.md')} ${get('radii.md')} 0;
  }
`

export const radioTabStyles = props => css`
  flex: 1;
  ${StyledLabel} {
    ${fieldTypeStyles};
    flex-grow: 1;
    position: relative;
    display: block;
    max-width: 100%;
    user-select: none;
    margin: 0;
    padding: ${get('gutter.xs')};
    padding-right: calc(${get('gutter.xs')} + ${get('borderWidth.input')});
    cursor: pointer;
    line-height: 1;
    text-align: center;
    transition: ${get('transition.sm')};
    border-radius: 0;
    ${overflowEllipsis};

    ${props.checked && checkedStyles};

    &:hover {
      ${getCss('fields.radiotabs.hover')};
    }
  }

  ${props.direction === 'column' && columnStyles};
  ${props.direction === 'row' && rowStyles};
`
