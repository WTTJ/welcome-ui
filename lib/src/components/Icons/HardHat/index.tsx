import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const HardHatIcon: React.FC<IconProps> = props => {
  return <Icon alt="HardHat" content={content} {...props} />
}
