/* eslint-disable react/prop-types */
/* eslint-disable react/no-multi-comp */
import React from 'react'
import styled, { css } from '@xstyled/styled-components'
import { Icons as FontIcons } from '@welcome-ui/icons.font'
import * as Icons from '@welcome-ui/icons'
import { Box } from '@welcome-ui/box'
import { useCopyText } from '@welcome-ui/utils.copy'
import { Toast, useToast } from '@welcome-ui/toast'

import { toPascalCase } from '../../utils/strings'

const Content = styled(Box)`
  background-color: light.900;
  border-color: light.800;
  border-width: sm;
  border-style: solid;
  border-radius: lg;
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
            background-color: light.800;
            border-color: light.800;
          }
        }
      `}

    ${copied &&
    css`
        ${Content} {
          background-color: success.100;
          border-color: success.100;
        }
      `}
  `
)

function IconItem({ componentName, icon: Icon, name }) {
  const [copy, copied] = useCopyText(componentName, 500)
  const toast = useToast()

  function handleCopy() {
    copy()
    toast(
      <Toast.Snackbar variant="success">
        <span>Copied</span>
      </Toast.Snackbar>,
      { duration: 1000 }
    )
  }

  return (
    <Item copied={copied} onClick={handleCopy}>
      <Content>
        <Icon size="xl" />
      </Content>
      <Box fontSize="meta1" fontWeight="medium" pt="xs" px="xs" textAlign="center" w={1}>
        {name}
      </Box>
    </Item>
  )
}

export function IconsList({ icons, isIconFont }) {
  return (
    <Box display="flex" flexWrap="wrap">
      {icons.map(key => {
        const name = toPascalCase(key)
        const componentName = isIconFont ? `Icons.${name}` : `${name}Icon`
        const Icon = isIconFont ? FontIcons[name] : Icons[componentName]
        if (!Icon) {
          // eslint-disable-next-line no-console
          console.error(`The "${key}" icon is missing`)
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
