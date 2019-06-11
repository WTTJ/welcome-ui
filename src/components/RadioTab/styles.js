import styled, { css } from 'styled-components'

import { get, getCss } from '../../theme/helpers'
import { overflowEllipsis } from '../../common/styles/text'
import { system } from '../../utils/utils'
// common form styles
import { fieldTypeStyles } from '../../common/styles/form'
import { StyledLabel } from '../Label/styles'

export const StyledRadioTab = styled.div`
  flex: 1;
`

export const StyledInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  ${system};
`

const checkedStyles = css`
  ${getCss('fields.radiotabs.checked')};
  z-index: 2;
`

const columnStyles = css`
  margin-top: -${get('borderWidths.sm')};

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
  margin-left: -${get('borderWidths.sm')};
  margin-bottom: 0;

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
  margin: 0;
  ${StyledLabel} {
    ${fieldTypeStyles};
    flex-grow: 1;
    position: relative;
    display: block;
    max-width: 100%;
    user-select: none;
    margin: 0;
    padding: ${get('space.sm')};
    padding-right: calc(${get('space.sm')} + ${get('borderWidths.sm')});
    cursor: pointer;
    line-height: 1;
    text-align: center;
    transition: none;
    border-radius: 0;
    ${overflowEllipsis};

    &:hover {
      ${getCss('fields.radiotabs.hover')};
    }

    ${props.checked && checkedStyles};
  }

  ${props.flexDirection === 'column' && columnStyles};
  ${props.flexDirection === 'row' && rowStyles};
`
