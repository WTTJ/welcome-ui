import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const KeyIcon: React.FC<IconProps> = props => {
  return <Icon alt="Key" content={content} {...props} />
}
