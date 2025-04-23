import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const ClockIcon: React.FC<IconProps> = props => {
  return <Icon alt="Clock" content={content} {...props} />
}
