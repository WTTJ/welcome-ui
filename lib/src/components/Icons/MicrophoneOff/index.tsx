import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const MicrophoneOffIcon: React.FC<IconProps> = props => {
  return <Icon alt="MicrophoneOff" content={content} {...props} />
}
