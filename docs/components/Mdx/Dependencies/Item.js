import React from 'react'
import { Tag } from '@welcome-ui/tag'
import { Box } from '@welcome-ui/box'
import { useCopyText } from '@welcome-ui/utils.copy'
import { CopyIcon, CheckIcon } from '@welcome-ui/icons'

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
      <Tag backgroundColor="neutral-white" key={dependency}>
        {`${dependency} [${version}]`}
        {!copied && <CopyIcon onClick={handleCopy} size="sm" />}
        {copied && <CheckIcon color="success-50" size="sm" />}
      </Tag>
    </Box>
  )
}
