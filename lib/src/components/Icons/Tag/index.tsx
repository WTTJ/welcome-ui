import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const TagIcon: React.FC<IconProps> = props => {
  return <Icon alt="Tag" content={content} {...props} />
}
