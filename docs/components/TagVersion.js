/* eslint-disable react/prop-types */
import React from 'react'
import { Box } from '@welcome-ui/box'
import { GithubIcon, NpmIcon } from '@welcome-ui/icons'
import { Toast, useToast } from '@welcome-ui/toast'
import { Button } from '@welcome-ui/button'
import { Tooltip } from '@welcome-ui/tooltip'
import { useCopyText } from '@welcome-ui/utils.copy'

export const TagVersion = ({ component, href, name, version, ...rest }) => {
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
    <Box mt="-3xl" pb="4xl">
      <Box alignItems="center" display="flex" flexWrap="wrap" m="-xs" pt="-3xl">
        <Tooltip content="Copy version" fixed>
          <Button m={3} onClick={handleCopy} size="sm" {...rest}>
            {version}
          </Button>
        </Tooltip>
        <Button
          alt="npm package"
          as="a"
          href={href || `https://www.npmjs.com/package/${name}`}
          m="xs"
          rel="noopener noreferrer"
          size="sm"
          target="_blank"
          variant="quaternary"
        >
          <NpmIcon size="lg" />
          <span>{name}</span>
        </Button>
        <Button
          as="a"
          href={`https://github.com/WTTJ/welcome-ui/tree/master/packages/${component}`}
          m={3}
          size="sm"
          target="_blank"
          variant="quaternary"
        >
          <GithubIcon size="lg" />
          <span>View source</span>
        </Button>
      </Box>
    </Box>
  )
}
