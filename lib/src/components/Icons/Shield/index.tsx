import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const ShieldIcon: React.FC<IconProps> = props => {
  return <Icon alt="Shield" content={content} {...props} />
}
