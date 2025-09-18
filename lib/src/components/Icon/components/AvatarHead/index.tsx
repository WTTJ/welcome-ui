import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const AvatarHeadIcon = (props: IconProps) => {
  return <Icon alt="AvatarHead" content={content} {...props} />
}
