import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const VideoIcon = (props: IconProps) => {
  return <Icon alt="Video" content={content} {...props} />
}
