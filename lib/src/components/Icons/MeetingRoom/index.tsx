import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const MeetingRoomIcon: React.FC<IconProps> = props => {
  return <Icon alt="MeetingRoom" content={content} {...props} />
}
