import styled, { css } from '@xstyled/styled-components'
import { Link } from 'docz'
import { th } from '@xstyled/system'

import { shouldForwardProp } from '../../../../packages/System/index'

export const Block = styled.ul`
  margin: 0;
  padding: 0;
  margin-bottom: xl;
  font-size: body2;
`

export const Items = styled.ul`
  margin: md 0 0 0;
  padding: 0;
  list-style: none;
`

export const Title = styled.div`
  ${th('docz.navigation')};
  ${p => p.mobile && th('docz.navigationmobile')};
  opacity: 0.7;
  font-weight: bold;
`

export const TitleLink = styled(Link).withConfig({ shouldForwardProp })(
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

export const ItemLink = styled(Link).withConfig({ shouldForwardProp })(
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
  padding-bottom: 3;
  padding-top: 3;
  padding-left: xl;

  &:hover {
    opacity: 1;
  }
`
