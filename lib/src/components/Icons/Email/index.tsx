import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const EmailIcon: React.FC<IconProps> = props => {
  return <Icon alt="Email" content={content} {...props} />
}
