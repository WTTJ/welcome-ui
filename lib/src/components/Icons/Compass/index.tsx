import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const CompassIcon: React.FC<IconProps> = props => {
  return <Icon alt="Compass" content={content} {...props} />
}
