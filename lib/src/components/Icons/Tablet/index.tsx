import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const TabletIcon: React.FC<IconProps> = props => {
  return <Icon alt="Tablet" content={content} {...props} />
}
