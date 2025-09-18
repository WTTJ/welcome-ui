import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const VideoCameraIcon = (props: IconProps) => {
  return <Icon alt="VideoCamera" content={content} {...props} />
}
