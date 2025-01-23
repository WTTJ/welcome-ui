import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const EarthIcon: React.FC<IconProps> = props => {
  return <Icon alt="Earth" content={content} {...props} />
}
