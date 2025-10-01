import { AspectRatio } from '@/components/AspectRatio'

const Example = () => {
  return (
    <AspectRatio ratio="video">
      <iframe
        allowFullScreen
        src="https://www.youtube.com/embed/jNQXAC9IVRw"
        title="YouTube video player"
      />
    </AspectRatio>
  )
}

export default Example
