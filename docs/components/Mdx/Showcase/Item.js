/* eslint-disable react/prop-types */
import { Box } from '@welcome-ui/box'
import { CheckIcon } from '@welcome-ui/icons.check'
import { CopyIcon } from '@welcome-ui/icons.copy'
import { Text } from '@welcome-ui/text'
import { useCopyText } from '@welcome-ui/utils.copy'
import React from 'react'

export function Item({ content, name }) {
  const [copy, copied] = useCopyText(content, 1500)

  const handleCopy = () => {
    copy()
  }

  return (
    <Box alignItems="center" display="flex" pb="sm">
      <Text color="light.200" m="0" variant="body4" w={{ xs: '5xl', md: '6xl' }}>
        {name}
      </Text>
      <Box alignItems="center" display="flex" flex="1">
        <Text lines={1} m="0" mr="xxs">
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
