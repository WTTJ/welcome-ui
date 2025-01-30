import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const LocationIcon: React.FC<IconProps> = props => {
  return <Icon alt="Location" content={content} {...props} />
}
