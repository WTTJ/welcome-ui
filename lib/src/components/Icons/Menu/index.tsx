import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const MenuIcon: React.FC<IconProps> = props => {
  return <Icon alt="Menu" content={content} {...props} />
}
