/* eslint-disable react/prop-types */
/* eslint-disable react/no-multi-comp */
import React from 'react'
import styled, { css } from '@xstyled/styled-components'

import { Box } from '../packages/Box/index'
import { useCopyText } from '../packages/Copy'
import * as Icons from '../icons'
import { Icons as FontIcons } from '../packages/IconFont'
import { toPascalCase } from '../src/utils/toPascalCase'

const Content = styled(Box)`
  background-color: light.500;
  border-radius: lg;
  color: dark.200;
  display: flex;
  justify-content: center;
  padding: lg md;
  width: 100%;
  transition: medium;
`

const Item = styled(Box)(
  ({ copied }) => css`
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: md;
    cursor: pointer;
    width: 130;

    ${!copied &&
      css`
        &:hover {
          ${Content} {
            background-color: light.200;
          }
        }
      `}

    ${copied &&
      css`
        ${Content} {
          background-color: success.100;
        }
      `}
  `
)

function IconItem({ componentName, icon: Icon, name }) {
  const [copy, copied] = useCopyText(componentName, 500)

  return (
    <Item copied={copied} onClick={() => copy()}>
      <Content
        backgroundColor="light.500"
        borderRadius="lg"
        color="dark.200"
        display="flex"
        justifyContent="center"
        padding="15px 10px"
        width={1}
      >
        <Icon size="xl" />
      </Content>
      <Box fontSize="meta1" fontWeight="medium" padding="5px 0" textAlign="center" width={1}>
        {name}
      </Box>
    </Item>
  )
}

export function IconsList(icons, iconFont) {
  return (
    <Box display="flex" flexWrap="wrap">
      {icons.map(key => {
        const name = toPascalCase(key)
        const componentName = iconFont ? `Icons.${name}` : `${name}Icon`
        const Icon = iconFont ? FontIcons[name] : Icons[componentName]
        if (!Icon) {
          // eslint-disable-next-line no-console
          console.error(`The "${key}" icon is generating this issue`)
        }

        return (
          <IconItem
            componentName={componentName}
            icon={Icon || Icons.CrossIcon}
            key={key}
            name={name}
          />
        )
      })}
    </Box>
  )
}
