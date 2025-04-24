import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const CameraOnIcon: React.FC<IconProps> = props => {
  return <Icon alt="CameraOn" content={content} {...props} />
}
