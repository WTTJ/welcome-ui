import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'

import { overflowEllipsis } from '../../common/styles/text'
import { system } from '../../utils/utils'
// common form styles
import { fieldStyles } from '../../common/styles/form'
import { Label as StyledLabel } from '../Label/styles'

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
  ${th('fields.radiotabs.checked')};
  z-index: 2;
`

const columnStyles = css`
  margin-top: -${th.borderWidth('sm')};

  &:first-child {
    margin-top: 0;

    ${StyledLabel} {
      border-radius: md md 0 0;
    }
  }

  &:last-child ${StyledLabel} {
    border-radius: 0 0 md md;
  }
`

const rowStyles = css`
  margin-left: -${th.borderWidth('sm')};
  margin-bottom: 0;

  &:first-child {
    margin-left: 0;

    ${StyledLabel} {
      border-radius: md 0 0 md;
    }
  }

  &:last-child ${StyledLabel} {
    border-radius: 0 md md 0;
  }
`

export const radioTabStyles = props => css`
  flex: 1;
  margin: 0;
  ${StyledLabel} {
    ${fieldStyles};
    flex-grow: 1;
    position: relative;
    display: block;
    max-width: 100%;
    user-select: none;
    margin: 0;
    padding: sm;
    padding-right: calc(${th.space('sm')} + ${th.borderWidth('sm')});
    cursor: pointer;
    line-height: 1;
    text-align: center;
    transition: none;
    border-radius: 0;
    ${overflowEllipsis};

    &:hover {
      ${th('fields.radiotabs.hover')};
    }

    ${props.checked && checkedStyles};
  }

  ${props.flexDirection === 'column' && columnStyles};
  ${props.flexDirection === 'row' && rowStyles};
`
