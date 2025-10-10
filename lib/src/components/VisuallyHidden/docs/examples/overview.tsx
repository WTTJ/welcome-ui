import { VisuallyHidden } from '@/components/VisuallyHidden'

const Example = () => {
  return (
    <button>
      Submit
      <VisuallyHidden>Hidden</VisuallyHidden>
    </button>
  )
}

export default Example
