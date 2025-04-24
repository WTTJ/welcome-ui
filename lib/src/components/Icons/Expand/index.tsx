import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const ExpandIcon: React.FC<IconProps> = props => {
  return <Icon alt="Expand" content={content} {...props} />
}
