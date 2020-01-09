import styled, { css } from '@xstyled/styled-components'
import { Link } from 'docz'
import { th } from '@xstyled/system'

import { filterComponent } from '../../../../packages/System/index'

export const Block = styled.ul`
  margin: 0;
  padding: 0;
  margin-bottom: xl;
  font-size: body2;
`

export const Items = styled.ul`
  margin: lg 0 0 0;
  padding: 0;
  list-style: none;
  margin-bottom: -sm;
`

export const Title = styled.div`
  ${th('docz.navigation')};
  opacity: 0.7;
  font-weight: bold;
`

export const TitleLink = styled(filterComponent(Link))(
  ({ active }) => css`
    ${th('docz.navigation')};
    font-weight: bold;
    text-decoration: none;
    transition: medium;
    opacity: 0.7;

    &:hover {
      opacity: 1;
    }

    ${active && `opacity: 1;`}
  `
)

export const ItemLink = styled(filterComponent(Link))(
  ({ active }) => css`
    text-decoration: none;
    ${active &&
      css`
        ${Item} {
          opacity: 1;
          font-weight: bold;
        }
      `}
  `
)

export const Item = styled.li`
  ${th('docz.navigation')};
  transition: medium;
  opacity: 0.7;
  padding-bottom: sm;
  padding-left: xl;

  &:hover {
    opacity: 1;
  }
`
