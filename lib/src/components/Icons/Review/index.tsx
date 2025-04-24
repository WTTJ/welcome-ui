import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const ReviewIcon: React.FC<IconProps> = props => {
  return <Icon alt="Review" content={content} {...props} />
}
