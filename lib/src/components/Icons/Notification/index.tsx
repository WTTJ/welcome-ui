import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const NotificationIcon: React.FC<IconProps> = props => {
  return <Icon alt="Notification" content={content} {...props} />
}
