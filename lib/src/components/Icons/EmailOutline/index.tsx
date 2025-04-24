import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const EmailOutlineIcon: React.FC<IconProps> = props => {
  return <Icon alt="EmailOutline" content={content} {...props} />
}
