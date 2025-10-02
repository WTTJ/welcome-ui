import { AspectRatio } from 'welcome-ui/AspectRatio'
import { Box } from 'welcome-ui/Box'

export const AspectRatioComponent = () => {
  return (
    <div>
      <AspectRatio flex="1" maxH={{ _: 160, md: 80 }} maxW={{ _: '100%', md: '128' }}>
        <Box
          alt="video_thumbnail"
          as="img"
          borderRadius="md"
          loading="lazy"
          src="https://via.placeholder.com/160"
        />
      </AspectRatio>
    </div>
  )
}
