import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const AvatarIcon = (props: IconProps) => {
  return <Icon alt="Avatar" content={content} {...props} />
}
