import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const ComputerIcon: React.FC<IconProps> = props => {
  return <Icon alt="Computer" content={content} {...props} />
}
