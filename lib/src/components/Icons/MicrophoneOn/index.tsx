import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const MicrophoneOnIcon: React.FC<IconProps> = props => {
  return <Icon alt="MicrophoneOn" content={content} {...props} />
}
