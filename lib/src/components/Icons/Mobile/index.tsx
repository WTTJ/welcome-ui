import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const MobileIcon: React.FC<IconProps> = props => {
  return <Icon alt="Mobile" content={content} {...props} />
}
