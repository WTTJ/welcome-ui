import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const FlagEnIcon: React.FC<IconProps> = props => {
  return <Icon alt="FlagEn" content={content} {...props} />
}
