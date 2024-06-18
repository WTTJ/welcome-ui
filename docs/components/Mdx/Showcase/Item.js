import React from 'react'
import { Box } from '@welcome-ui/box'
import { CheckIcon, CopyIcon } from '@welcome-ui/icons'
import { Text } from '@welcome-ui/text'
import { useCopyText } from '@welcome-ui/utils.copy'

export function Item({ content, name }) {
  const [copy, copied] = useCopyText(content, 1500)

  const handleCopy = () => {
    copy()
  }

  return (
    <Box alignItems="center" display="flex" pb="md">
      <Text m="0" variant="xs" w={{ xs: 50, md: 64 }}>
        {name}
      </Text>
      <Box alignItems="center" display="flex" flex="1">
        <Text lines={1} m="0" mr="sm" color="neutral-black">
          {content}
        </Text>
        {copied && <CheckIcon color="success-50" flex="0 0 auto" size="sm" />}
        {!copied && <CopyIcon cursor="pointer" flex="0 0 auto" size="sm" onClick={handleCopy} />}
      </Box>
    </Box>
  )
}
