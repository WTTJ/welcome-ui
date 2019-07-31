import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'

import { overflowEllipsis } from '../../common/styles/text'
import { componentSystem } from '../../utils/'
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
      border-radius: md;
      ${componentSystem};
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
    }
  }

  &:last-child ${Label} {
    border-radius: md;
    ${componentSystem};
    border-top-right-radius: 0;
    border-top-left-radius: 0;
  }
`

const rowStyles = css`
  margin-left: -${th.borderWidth('sm')};
  margin-bottom: 0;

  &:first-child {
    margin-left: 0;

    ${Label} {
      border-radius: md;
      ${componentSystem};
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  }

  &:last-child ${Label} {
    border-radius: md;
    ${componentSystem};
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`

export const radioTabStyles = ({ checked, flexDirection }) => css`
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
    ${overflowEllipsis};

    &:hover {
      ${th('fields.radiotabs.hover')};
    }

    ${checked && checkedStyles};
    ${componentSystem};
    border-radius: 0;
  }

  ${flexDirection === 'column' && columnStyles};
  ${flexDirection === 'row' && rowStyles};
`
