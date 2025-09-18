import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const PlayIcon = (props: IconProps) => {
  return <Icon alt="Play" content={content} {...props} />
}
