import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const SlackIcon: React.FC<IconProps> = props => {
  return <Icon alt="Slack" content={content} {...props} />
}
