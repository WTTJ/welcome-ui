import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const BookIcon: React.FC<IconProps> = props => {
  return <Icon alt="Book" content={content} {...props} />
}
