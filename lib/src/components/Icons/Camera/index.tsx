import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const CameraIcon: React.FC<IconProps> = props => {
  return <Icon alt="Camera" content={content} {...props} />
}
