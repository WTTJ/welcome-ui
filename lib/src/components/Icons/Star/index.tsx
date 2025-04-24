import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const StarIcon: React.FC<IconProps> = props => {
  return <Icon alt="Star" content={content} {...props} />
}
