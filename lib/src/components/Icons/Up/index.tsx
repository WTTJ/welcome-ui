import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const UpIcon: React.FC<IconProps> = props => {
  return <Icon alt="Up" content={content} {...props} />
}
