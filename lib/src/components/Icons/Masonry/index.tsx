import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const MasonryIcon: React.FC<IconProps> = props => {
  return <Icon alt="Masonry" content={content} {...props} />
}
