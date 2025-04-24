import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const MapIcon: React.FC<IconProps> = props => {
  return <Icon alt="Map" content={content} {...props} />
}
