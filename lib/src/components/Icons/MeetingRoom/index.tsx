import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const MeetingRoomIcon: React.FC<IconProps> = props => {
  return <Icon alt="MeetingRoom" content={content} {...props} />
}
