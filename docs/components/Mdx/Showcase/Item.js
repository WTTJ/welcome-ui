/* eslint-disable react/prop-types */
import React from 'react'
import { Box } from '@welcome-ui/box'
import { CheckIcon } from '@welcome-ui/icons.check'
import { CopyIcon } from '@welcome-ui/icons.copy'
import { Text } from '@welcome-ui/text'
import { useCopyText } from '@welcome-ui/utils.copy'

export function Item({ content, name }) {
  const [copy, copied] = useCopyText(content, 1500)

  const handleCopy = () => {
    copy()
  }

  return (
    <Box alignItems="center" display="flex" pb="md">
      <Text color="light.200" m="0" variant="body4" w={{ xs: 50, md: 64 }}>
        {name}
      </Text>
      <Box alignItems="center" display="flex" flex="1">
        <Text lines={1} m="0" mr="sm">
          {content}
        </Text>
        {copied && <CheckIcon color="success.500" flex="0 0 auto" />}
        {!copied && (
          <CopyIcon color="dark.200" cursor="pointer" flex="0 0 auto" onClick={handleCopy} />
        )}
      </Box>
    </Box>
  )
}
