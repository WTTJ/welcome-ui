import styled from 'styled-components'

import { get } from '../../theme/helpers'
import { overflowEllipsis } from '../../common/styles/text'

export const InputRadioWrapper = styled.div`
  flex: 1;
`

export const InputRadio = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  opactiy: 0;
`

export const InputRadioLabel = styled.label`
  position: relative;
  cursor: pointer;
  user-select: none;
  display: block;
  padding: ${get('gutter', 'xs')};
  padding-right: calc(${get('gutter', 'xs')} + ${get('borderWidth', 'input')});
  text-align: center;
  background-color: ${get('color', 'bg', 'light')};
  border: ${get('borderWidth', 'input')} solid ${get('color', 'border', 'primary')};
  margin-left: -${get('borderWidth', 'input')};
  ${get('textStyles', 'input')};
  transition: ${get('transition', 'sm')};
  line-height: 1;
  ${overflowEllipsis};

  ${InputRadio}:checked + & {
    z-index: 2;
  }
  &:hover,
  ${InputRadio}:checked + & {
    background-color: ${get('color', 'white')};
    box-shadow: ${get('boxShadow', 'xs')};
  }

  ${InputRadio}:checked + & {
    border-color: ${get('color', 'primary')};
    font-weight: ${get('fontWeight', 'medium')};
  }

  ${InputRadioWrapper}:first-child & {
    border-radius: ${get('radius', 'md')} 0 0 ${get('radius', 'md')};
    margin-left: 0;
  }

  ${InputRadioWrapper}:last-child & {
    border-radius: 0 ${get('radius', 'md')} ${get('radius', 'md')} 0;
    padding-right: ${get('gutter', 'xs')};
  }
`
