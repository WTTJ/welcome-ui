import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const AirplayIcon: React.FC<IconProps> = props => {
  return <Icon alt="Airplay" content={content} {...props} />
}
