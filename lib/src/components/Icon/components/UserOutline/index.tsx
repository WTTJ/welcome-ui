import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const UserOutlineIcon = (props: IconProps) => {
  return <Icon alt="UserOutline" content={content} {...props} />
}
