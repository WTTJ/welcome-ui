import { Button } from '@components/Button'

const Example = () => {
  return (
    <>
      <Button>
        <i className="wui-icon-add wui-icon-font" />
        <span>Button</span>
      </Button>
      <Button variant="secondary">
        <i className="wui-icon-add wui-icon-font" />
        <span>Button</span>
      </Button>
      <Button variant="tertiary">
        <i className="wui-icon-add wui-icon-font" />
        <span>Button</span>
      </Button>
      <Button disabled>
        <i className="wui-icon-add wui-icon-font" />
        <span>Button</span>
      </Button>
    </>
  )
}

export default Example
