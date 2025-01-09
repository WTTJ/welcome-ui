import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const CastIcon: React.FC<IconProps> = props => {
  return <Icon alt="Cast" content={content} {...props} />
}
