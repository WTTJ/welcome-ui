import { Loader } from '../../index'

const Example = () => {
  return (
    <div className="flex flex-col gap-xl">
      <Loader size="xs" />
      <Loader />
      <Loader size="md" />
      <Loader size="lg" />
      <Loader size="40px" />
      <Loader size={50} />
    </div>
  )
}

export default Example
