import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const WriteIcon: React.FC<IconProps> = props => {
  return <Icon alt="Write" content={content} {...props} />
}
