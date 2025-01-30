import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const ThunderclockIcon: React.FC<IconProps> = props => {
  return <Icon alt="Thunderclock" content={content} {...props} />
}
