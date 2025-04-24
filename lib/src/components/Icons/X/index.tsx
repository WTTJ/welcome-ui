import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const XIcon: React.FC<IconProps> = props => {
  return <Icon alt="X" content={content} {...props} />
}
