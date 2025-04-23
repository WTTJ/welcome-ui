import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const TabletIcon: React.FC<IconProps> = props => {
  return <Icon alt="Tablet" content={content} {...props} />
}
