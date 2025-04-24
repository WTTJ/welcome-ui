import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const BasketballIcon: React.FC<IconProps> = props => {
  return <Icon alt="Basketball" content={content} {...props} />
}
