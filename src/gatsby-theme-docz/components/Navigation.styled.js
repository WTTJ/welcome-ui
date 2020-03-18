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
  ${p => p.mobile && th('docz.navigationmobile')};
  opacity: 0.7;
  font-weight: bold;
`

export const TitleLink = styled(filterComponent(Link, ['isActive', 'mobile']))(
  ({ isActive }) => css`
    ${th('docz.navigation')};
    ${p => p.mobile && th('docz.navigationmobile')};
    font-weight: bold;
    text-decoration: none;
    transition: medium;
    opacity: 0.7;

    &:hover {
      opacity: 1;
    }

    ${isActive && `opacity: 1;`}
  `
)

export const ItemLink = styled(filterComponent(Link, ['isActive']))(
  ({ isActive }) => css`
    text-decoration: none;
    ${isActive &&
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
  ${p => p.mobile && th('docz.navigationmobile')};
  transition: medium;
  opacity: 0.7;
  padding-bottom: sm;
  padding-left: xl;

  &:hover {
    opacity: 1;
  }
`
