
import React from 'react'
import { Tag } from '@welcome-ui/tag'
import { Box } from '@welcome-ui/box'
import { useCopyText } from '@welcome-ui/utils.copy'
import { CopyIcon } from '@welcome-ui/icons.copy'
import { CheckIcon } from '@welcome-ui/icons.check'

export function Item({ dependency, version }) {
  const baseVersion = version.replace(/[\^=~]/, '')
  const [copy, copied] = useCopyText(baseVersion, 1000)

  const handleCopy = e => {
    e.preventDefault()
    copy()
  }

  return (
    <Box
      as="a"
      href={`https://npmjs.com/package/${dependency}/v/${baseVersion}`}
      mb="md"
      mr="md"
      rel="nofollow"
      target="_npm"
      textDecoration="none"
    >
      <Tag backgroundColor="light.900" key={dependency}>
        {`${dependency} [${version}]`}
        {!copied && <CopyIcon onClick={handleCopy} />}
        {copied && <CheckIcon color="success.500" />}
      </Tag>
    </Box>
  )
}
