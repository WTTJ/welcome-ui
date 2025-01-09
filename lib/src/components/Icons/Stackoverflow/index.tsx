import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const StackoverflowIcon: React.FC<IconProps> = props => {
  return <Icon alt="Stackoverflow" content={content} {...props} />
}
