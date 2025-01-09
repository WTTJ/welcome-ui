import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const LocationIcon: React.FC<IconProps> = props => {
  return <Icon alt="Location" content={content} {...props} />
}
