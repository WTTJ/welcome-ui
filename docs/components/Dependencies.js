/* eslint-disable react/no-multi-comp */
/* eslint-disable react/prop-types */
import React from 'react'
import { Tag } from '@welcome-ui/tag'
import { Link } from '@welcome-ui/link'
import { Box } from '@welcome-ui/box'
import { useCopyText } from '@welcome-ui/utils.copy'
import { Toast, useToast } from '@welcome-ui/toast'
import { AttachmentIcon } from '@welcome-ui/icons.attachment'

export const Dependency = ({ dependency, version }) => {
  const baseVersion = version.replace(/[\^=~]/, '')
  const [copy] = useCopyText(baseVersion)
  const toast = useToast()

  function handleCopy() {
    copy()
    toast(
      <Toast.Snackbar variant="success">
        <span>Copied</span>
      </Toast.Snackbar>
    )
  }

  return (
    <Box alignItems="center" as="li" display="flex" flexWrap="wrap" key={dependency} py="xxs">
      -
      <Link
        border="none"
        href={`https://npmjs.com/package/${dependency}/v/${baseVersion}`}
        rel="nofollow"
        target="_npm"
      >
        {' '}
        {dependency}
      </Link>
      <Tag ml="xs" size="md">
        {version}
      </Tag>
      <AttachmentIcon ml="xxs" onClick={handleCopy} />
    </Box>
  )
}

export const Dependencies = ({ dependencies }) => {
  if (!dependencies) {
    return 'None listed'
  }

  return (
    <Box as="ul" m="0" p="0" pl={{ md: '3xl' }}>
      {Object.entries(dependencies).map(([dependency, version]) => {
        return <Dependency dependency={dependency} key={dependency} version={version} />
      })}
    </Box>
  )
}
