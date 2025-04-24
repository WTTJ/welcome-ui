import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const PhoneOutlineIcon: React.FC<IconProps> = props => {
  return <Icon alt="PhoneOutline" content={content} {...props} />
}
