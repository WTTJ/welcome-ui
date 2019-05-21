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
  z-index: 2;

  &:hover {
    color: transparent;
  }
`

const columnStyles = css`
  margin-top: -${get('borderWidth.sm')};

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
  margin-left: -${get('borderWidth.sm')};

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
    padding: ${get('spaces.sm')};
    padding-right: calc(${get('spaces.sm')} + ${get('borderWidth.sm')});
    cursor: pointer;
    line-height: 1;
    text-align: center;
    transition: ${get('transition.sm')};
    border-radius: 0;
    ${overflowEllipsis};

    &:hover {
      ${getCss('fields.radiotabs.hover')};
      z-index: 1;
    }

    ${props.checked && checkedStyles};
  }

  ${props.direction === 'column' && columnStyles};
  ${props.direction === 'row' && rowStyles};
`
