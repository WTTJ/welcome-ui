import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const FlagEnIcon: React.FC<IconProps> = props => {
  return <Icon alt="FlagEn" content={content} {...props} />
}
