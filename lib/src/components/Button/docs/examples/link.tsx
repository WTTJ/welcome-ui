import { Button } from '../../index'

const Example = () => {
  return (
    <Button
      as="a"
      href="https://www.welcometothejungle.com"
      rel="noopener nofollow"
      target="_blank"
    >
      <i className="wui-icon-add wui-icon-font" data-wui-icon-font />
      <span>Welcome</span>
    </Button>
  )
}

export default Example
