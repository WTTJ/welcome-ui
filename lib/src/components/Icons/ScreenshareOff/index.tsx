import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const ScreenshareOffIcon: React.FC<IconProps> = props => {
  return <Icon alt="ScreenshareOff" content={content} {...props} />
}
