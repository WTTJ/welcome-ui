import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const ReviewOutlineIcon: React.FC<IconProps> = props => {
  return <Icon alt="ReviewOutline" content={content} {...props} />
}
