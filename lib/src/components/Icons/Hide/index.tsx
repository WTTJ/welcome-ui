import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const HideIcon: React.FC<IconProps> = props => {
  return <Icon alt="Hide" content={content} {...props} />
}
