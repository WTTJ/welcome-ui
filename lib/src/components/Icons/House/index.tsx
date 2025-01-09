import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const HouseIcon: React.FC<IconProps> = props => {
  return <Icon alt="House" content={content} {...props} />
}
