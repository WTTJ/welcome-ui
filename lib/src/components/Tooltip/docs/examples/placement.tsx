import * as React from 'react'

import { Button } from '@/components/Button'
import { Checkbox } from '@/components/Checkbox'
import { Field } from '@/components/Field'
import { InputText } from '@/components/InputText'
import { Tooltip } from '@/components/Tooltip'

const Example = () => {
  const [withArrow, setWithArrow] = React.useState(true)
  const [tooltipContent, setTooltipContent] = React.useState('This is the tooltip content')

  return (
    <div className="flex flex-col gap-lg">
      <Field label="Enable the arrow property">
        <Checkbox checked={withArrow} name="arrow" onChange={() => setWithArrow(!withArrow)} />
      </Field>

      <Field label="Tooltip content">
        <InputText
          name="tooltipContent"
          onChange={e => setTooltipContent(e.target.value)}
          value={tooltipContent}
        />
      </Field>
      <div className="flex flex-wrap gap-lg">
        <Tooltip content={tooltipContent} fixed placement="top-start" withArrow={withArrow}>
          <Button className="w-[120px]" size="md">
            <span>top-start &#8598; </span>
          </Button>
        </Tooltip>
        <Tooltip content={tooltipContent} fixed placement="top" withArrow={withArrow}>
          <Button className="w-[120px]" size="md">
            <span>top &#8593; </span>
          </Button>
        </Tooltip>
        <Tooltip content={tooltipContent} fixed placement="top-end" withArrow={withArrow}>
          <Button className="w-[120px]" size="md">
            <span>top-end &#8599; </span>
          </Button>
        </Tooltip>
      </div>
      <div className="flex flex-wrap gap-lg">
        <Tooltip content={tooltipContent} fixed placement="bottom-start" withArrow={withArrow}>
          <Button className="w-[120px]" size="md">
            <span>bottom-start &#8601; </span>
          </Button>
        </Tooltip>
        <Tooltip content={tooltipContent} fixed placement="bottom" withArrow={withArrow}>
          <Button className="w-[120px]" size="md">
            <span>bottom &#8595; </span>
          </Button>
        </Tooltip>
        <Tooltip content={tooltipContent} fixed placement="bottom-end" withArrow={withArrow}>
          <Button className="w-[120px]" size="md">
            <span>bottom-end &#8600; </span>
          </Button>
        </Tooltip>
      </div>
      <div className="flex flex-wrap gap-lg">
        <Tooltip content={tooltipContent} fixed placement="left-start" withArrow={withArrow}>
          <Button className="w-[120px]" size="md">
            <span>left-start &#8598; </span>
          </Button>
        </Tooltip>
        <Tooltip content={tooltipContent} fixed placement="left" withArrow={withArrow}>
          <Button className="w-[120px]" size="md">
            <span>left &#8592; </span>
          </Button>
        </Tooltip>
        <Tooltip content={tooltipContent} fixed placement="left-end" withArrow={withArrow}>
          <Button className="w-[120px]" size="md">
            <span>left-end &#8601; </span>
          </Button>
        </Tooltip>
      </div>
      <div className="flex flex-wrap gap-lg">
        <Tooltip content={tooltipContent} fixed placement="right-start" withArrow={withArrow}>
          <Button className="w-[120px]" size="md">
            <span>right-start &#8599; </span>
          </Button>
        </Tooltip>
        <Tooltip content={tooltipContent} fixed placement="right" withArrow={withArrow}>
          <Button className="w-[120px]" size="md">
            <span>right &#8594; </span>
          </Button>
        </Tooltip>
        <Tooltip content={tooltipContent} fixed placement="right-end" withArrow={withArrow}>
          <Button className="w-[120px]" size="md">
            <span>right-end &#8600; </span>
          </Button>
        </Tooltip>
      </div>
    </div>
  )
}

export default Example
