import * as React from 'react'
import { Tooltip } from 'welcome-ui/Tooltip'
import { Button } from 'welcome-ui/Button'
import { Flex } from 'welcome-ui/Flex'
import { Field } from 'welcome-ui/Field'
import { Checkbox } from 'welcome-ui/Checkbox'
import { InputText } from 'welcome-ui/InputText'
const Example = () => {
  const [withArrow, setWithArrow] = React.useState(true)
  const [tooltipContent, setTooltipContent] = React.useState('This is the tooltip content')

  return (
    <Flex flexDirection="column" gap="lg">
      <Field cursor="pointer" label="Enable the arrow property">
        <Checkbox checked={withArrow} name="arrow" onChange={() => setWithArrow(!withArrow)} />
      </Field>

      <Field label="Tooltip content">
        <InputText
          name="tooltipContent"
          onChange={e => setTooltipContent(e.target.value)}
          value={tooltipContent}
        />
      </Field>
      <Flex flexWrap="wrap" gap="lg">
        <Tooltip content={tooltipContent} fixed placement="top-start" withArrow={withArrow}>
          <Button size="sm" w={120}>
            <span>top-start &#8598; </span>
          </Button>
        </Tooltip>
        <Tooltip content={tooltipContent} fixed placement="top" withArrow={withArrow}>
          <Button size="sm" w={120}>
            <span>top &#8593; </span>
          </Button>
        </Tooltip>
        <Tooltip content={tooltipContent} fixed placement="top-end" withArrow={withArrow}>
          <Button size="sm" w={120}>
            <span>top-end &#8599; </span>
          </Button>
        </Tooltip>
      </Flex>
      <Flex flexWrap="wrap" gap="lg">
        <Tooltip content={tooltipContent} fixed placement="bottom-start" withArrow={withArrow}>
          <Button size="sm" w={120}>
            <span>bottom-start &#8601; </span>
          </Button>
        </Tooltip>
        <Tooltip content={tooltipContent} fixed placement="bottom" withArrow={withArrow}>
          <Button size="sm" w={120}>
            <span>bottom &#8595; </span>
          </Button>
        </Tooltip>
        <Tooltip content={tooltipContent} fixed placement="bottom-end" withArrow={withArrow}>
          <Button size="sm" w={120}>
            <span>bottom-end &#8600; </span>
          </Button>
        </Tooltip>
      </Flex>
      <Flex flexWrap="wrap" gap="lg">
        <Tooltip content={tooltipContent} fixed placement="left-start" withArrow={withArrow}>
          <Button size="sm" w={120}>
            <span>left-start &#8598; </span>
          </Button>
        </Tooltip>
        <Tooltip content={tooltipContent} fixed placement="left" withArrow={withArrow}>
          <Button size="sm" w={120}>
            <span>left &#8592; </span>
          </Button>
        </Tooltip>
        <Tooltip content={tooltipContent} fixed placement="left-end" withArrow={withArrow}>
          <Button size="sm" w={120}>
            <span>left-end &#8601; </span>
          </Button>
        </Tooltip>
      </Flex>
      <Flex flexWrap="wrap" gap="lg">
        <Tooltip content={tooltipContent} fixed placement="right-start" withArrow={withArrow}>
          <Button size="sm" w={120}>
            <span>right-start &#8599; </span>
          </Button>
        </Tooltip>
        <Tooltip content={tooltipContent} fixed placement="right" withArrow={withArrow}>
          <Button size="sm" w={120}>
            <span>right &#8594; </span>
          </Button>
        </Tooltip>
        <Tooltip content={tooltipContent} fixed placement="right-end" withArrow={withArrow}>
          <Button size="sm" w={120}>
            <span>right-end &#8600; </span>
          </Button>
        </Tooltip>
      </Flex>
    </Flex>
  )
}

export default Example
