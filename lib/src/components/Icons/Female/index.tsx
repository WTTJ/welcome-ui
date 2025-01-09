import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const FemaleIcon: React.FC<IconProps> = props => {
  return <Icon alt="Female" content={content} {...props} />
}
