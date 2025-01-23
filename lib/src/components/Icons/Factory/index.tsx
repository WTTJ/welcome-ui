import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const FactoryIcon: React.FC<IconProps> = props => {
  return <Icon alt="Factory" content={content} {...props} />
}
