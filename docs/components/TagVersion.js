/* eslint-disable react/prop-types */
import React from 'react'
import { Tag } from '@welcome-ui/tag'
import { Box } from '@welcome-ui/box'
import { AttachmentIcon } from '@welcome-ui/icons'
import { Toast, useToast } from '@welcome-ui/toast'
import { useCopyText } from '@welcome-ui/utils.copy'

export const TagVersion = ({ href, name, version, ...rest }) => {
  const [copy] = useCopyText(version, 500)
  const toast = useToast()

  function handleCopy() {
    copy()
    toast(
      <Toast.Snackbar variant="success">
        <span>Copied</span>
      </Toast.Snackbar>,
      { position: 'top', duration: 1000 }
    )
  }

  return (
    <Box alignItems="center" display="flex" mb="xl" mt="md">
      <Box
        alt="npm package"
        as="a"
        href={href || `https://www.npmjs.com/package/${name}`}
        rel="noopener noreferrer"
        style={{ textDecoration: 'none' }}
        target="_blank"
      >
        <Tag size="md" variant="secondary" {...rest}>
          {`v${version}`}
        </Tag>
      </Box>
      <AttachmentIcon color="dark.900" cursor="pointer" ml="xxs" onClick={handleCopy} size="lg" />
    </Box>
  )
}
