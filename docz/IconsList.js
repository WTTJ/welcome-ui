/* eslint-disable react/prop-types */
/* eslint-disable react/no-multi-comp */
import React from 'react'
import styled, { css } from '@xstyled/styled-components'

import { Box } from '../packages/Box/index'
import { useCopyText } from '../packages/Copy'

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

function IconItem({ icon, name, nameComponent }) {
  const [copy, copied] = useCopyText(nameComponent, 500)

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
        {icon}
      </Content>
      <Box fontSize="meta1" fontWeight="medium" padding="5px 0" textAlign="center" width={1}>
        {name}
      </Box>
    </Item>
  )
}

export function IconsList(icons) {
  return (
    <Box display="flex" flexWrap="wrap">
      {icons.map(key => {
        const name = key[0].toUpperCase() + key.slice(1)
        const nameComponent = `${name}Icon`

        // Require the correct icon
        const { [nameComponent]: Icon } = require(`../icons/${name}`)
        return (
          <IconItem icon={<Icon size="xl" />} key={key} name={name} nameComponent={nameComponent} />
        )
      })}
    </Box>
  )
}
