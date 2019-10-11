import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import { Radio as ReakitRadio } from 'reakit/Radio'

import { overflowEllipsis } from '../../common/styles/text'
import { fieldStyles } from '../../common/styles/form'
import { componentSystem, filterComponent, system } from '../../utils/system'

export const InputRadio = styled(filterComponent(ReakitRadio))(({ connected }) => {
  return css`
    position: absolute;
    top: 0;
    left: 0;
    visibility: hidden;
    ${connected ? componentSystem : system};
  `
})

const checkedStyles = css`
  ${th('fields.radiotabs.checked')};
  z-index: 2;
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

export const Label = styled.label(
  ({ checked, flexDirection }) => css`
    flex: 1;
    min-width: 0;
    min-height: 0;
    max-width: 100%;
    margin: 0;
    text-align: center;
    position: relative;
    cursor: pointer;
    transition: medium;

    ${fieldStyles};
    ${checked && checkedStyles};
    ${flexDirection === 'column' && columnStyles};
    ${flexDirection === 'row' && rowStyles};
    ${componentSystem};

    &:hover {
      ${th('fields.radiotabs.hover')};
    }
  `
)

export const Input = styled.div`
  flex-shrink: 0;
  position: relative;
`

export const Content = styled.div`
  ${overflowEllipsis};
`
