import styled from 'styled-components'

import { get, getCss } from '../../theme/helpers'
import { overflowEllipsis } from '../../common/styles/text'

export const RadioTabWrapper = styled.div`
  flex: 1;
`

export const RadioTab = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
`

export const RadioTabLabel = styled.label`
  ${getCss('fields', 'default')};
  ${overflowEllipsis};
  position: relative;
  cursor: pointer;
  user-select: none;
  display: block;
  text-align: center;
  line-height: 1;
  padding: ${get('gutter', 'xs')};
  padding-right: calc(${get('gutter', 'xs')} + ${get('borderWidth', 'input')});
  margin-left: -${get('borderWidth', 'input')};
  transition: ${get('transition', 'sm')};
  border-radius: 0;

  ${RadioTab}:checked + & {
    z-index: 2;
  }

  &:hover,
  ${RadioTab}:checked + & {
    background-color: ${get('color', 'light', 'light')};
    box-shadow: ${get('boxShadow', 'xs')};
  }

  ${RadioTab}:checked + & {
    border-color: ${get('color', 'primary', 'default')};
    font-weight: ${get('fontWeight', 'bold')};
    color: ${get('color', 'primary', 'dark')};
  }

  ${RadioTabWrapper}:first-child & {
    border-radius: ${get('radius', 'md')} 0 0 ${get('radius', 'md')};
    margin-left: 0;
  }

  ${RadioTabWrapper}:last-child & {
    border-radius: 0 ${get('radius', 'md')} ${get('radius', 'md')} 0;
    padding-right: ${get('gutter', 'xs')};
  }
`
