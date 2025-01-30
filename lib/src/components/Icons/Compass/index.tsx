import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const CompassIcon: React.FC<IconProps> = props => {
  return <Icon alt="Compass" content={content} {...props} />
}
