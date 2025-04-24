import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const PlayOutlineIcon: React.FC<IconProps> = props => {
  return <Icon alt="PlayOutline" content={content} {...props} />
}
