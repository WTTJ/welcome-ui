import { Loader } from '../../index'

const Example = () => {
  return (
    <div className="nine:flex nine:flex-col nine:gap-xl">
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
