import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const FemaleIcon: React.FC<IconProps> = props => {
  return <Icon alt="Female" content={content} {...props} />
}
