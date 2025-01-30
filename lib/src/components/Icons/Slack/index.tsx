import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const SlackIcon: React.FC<IconProps> = props => {
  return <Icon alt="Slack" content={content} {...props} />
}
