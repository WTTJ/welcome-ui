import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const HardHatIcon: React.FC<IconProps> = props => {
  return <Icon alt="HardHat" content={content} {...props} />
}
