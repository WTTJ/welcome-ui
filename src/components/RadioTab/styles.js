import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'

import { overflowEllipsis } from '../../common/styles/text'
import { system } from '../../utils/'
// common form styles
import { fieldStyles } from '../../common/styles/form'
import { Label } from '../Label/styles'

export const RadioTab = styled.div`
  flex: 1;
`

export const Input = styled.input`
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

    ${Label} {
      border-radius: md md 0 0;
    }
  }

  &:last-child ${Label} {
    border-radius: 0 0 md md;
  }
`

const rowStyles = css`
  margin-left: -${th.borderWidth('sm')};
  margin-bottom: 0;

  &:first-child {
    margin-left: 0;

    ${Label} {
      border-radius: md 0 0 md;
    }
  }

  &:last-child ${Label} {
    border-radius: 0 md md 0;
  }
`

export const radioTabStyles = props => css`
  flex: 1;
  min-width: 0;
  min-height: 0;
  margin: 0;
  ${Label} {
    ${fieldStyles};
    display: block;
    text-align: center;
    flex-grow: 1;
    position: relative;
    min-width: 0;
    max-width: 100%;
    user-select: none;
    margin: 0;
    cursor: pointer;
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
