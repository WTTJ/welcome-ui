import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const UserOutlineIcon: React.FC<IconProps> = props => {
  return <Icon alt="UserOutline" content={content} {...props} />
}
