import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const ClockIcon: React.FC<IconProps> = props => {
  return <Icon alt="Clock" content={content} {...props} />
}
