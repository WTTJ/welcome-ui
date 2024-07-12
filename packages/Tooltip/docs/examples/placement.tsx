import * as React from 'react'
import { Tooltip } from '@welcome-ui/tooltip'
import { Button } from '@welcome-ui/button'
import { Flex } from '@welcome-ui/flex'

const Example = () => {
  return (
    <>
      <Flex flexWrap="wrap" gap="lg">
        <Tooltip content="Tooltip" fixed placement="top-start">
          <Button size="sm" w={120}>
            <span>top-start &#8598; </span>
          </Button>
        </Tooltip>
        <Tooltip content="Tooltip" fixed placement="top">
          <Button size="sm" w={120}>
            <span>top &#8593; </span>
          </Button>
        </Tooltip>
        <Tooltip content="Tooltip" fixed placement="top-end">
          <Button size="sm" w={120}>
            <span>top-end &#8599; </span>
          </Button>
        </Tooltip>
      </Flex>
      <Flex flexWrap="wrap" gap="lg">
        <Tooltip content="Tooltip" fixed placement="bottom-start">
          <Button size="sm" w={120}>
            <span>bottom-start &#8601; </span>
          </Button>
        </Tooltip>
        <Tooltip content="Tooltip" fixed placement="bottom">
          <Button size="sm" w={120}>
            <span>bottom &#8595; </span>
          </Button>
        </Tooltip>
        <Tooltip content="Tooltip" fixed placement="bottom-end">
          <Button size="sm" w={120}>
            <span>bottom-end &#8600; </span>
          </Button>
        </Tooltip>
      </Flex>
      <Flex flexWrap="wrap" gap="lg">
        <Tooltip content="Tooltip" fixed placement="left-start">
          <Button size="sm" w={120}>
            <span>left-start &#8598; </span>
          </Button>
        </Tooltip>
        <Tooltip content="Tooltip" fixed placement="left">
          <Button size="sm" w={120}>
            <span>left &#8592; </span>
          </Button>
        </Tooltip>
        <Tooltip content="Tooltip" fixed placement="left-end">
          <Button size="sm" w={120}>
            <span>left-end &#8601; </span>
          </Button>
        </Tooltip>
      </Flex>
      <Flex flexWrap="wrap" gap="lg">
        <Tooltip content="Tooltip" fixed placement="right-start">
          <Button size="sm" w={120}>
            <span>right-start &#8599; </span>
          </Button>
        </Tooltip>
        <Tooltip content="Tooltip" fixed placement="right">
          <Button size="sm" w={120}>
            <span>right &#8594; </span>
          </Button>
        </Tooltip>
        <Tooltip content="Tooltip" fixed placement="right-end">
          <Button size="sm" w={120}>
            <span>right-end &#8600; </span>
          </Button>
        </Tooltip>
      </Flex>
    </>
  )
}

export default Example
