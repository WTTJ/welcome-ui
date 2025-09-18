import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const MeetingRoomIcon = (props: IconProps) => {
  return <Icon alt="MeetingRoom" content={content} {...props} />
}
