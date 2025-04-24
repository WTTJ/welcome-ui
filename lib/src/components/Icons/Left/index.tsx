import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const LeftIcon: React.FC<IconProps> = props => {
  return <Icon alt="Left" content={content} {...props} />
}
