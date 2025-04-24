import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const ControlBackwardIcon: React.FC<IconProps> = props => {
  return <Icon alt="ControlBackward" content={content} {...props} />
}
