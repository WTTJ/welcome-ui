import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const PinterestIcon: React.FC<IconProps> = props => {
  return <Icon alt="Pinterest" content={content} {...props} />
}
