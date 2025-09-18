import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const MusicIcon = (props: IconProps) => {
  return <Icon alt="Music" content={content} {...props} />
}
