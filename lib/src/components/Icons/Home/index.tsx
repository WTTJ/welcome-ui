import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const HomeIcon: React.FC<IconProps> = props => {
  return <Icon alt="Home" content={content} {...props} />
}
