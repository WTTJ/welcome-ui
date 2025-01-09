import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const StackserverIcon: React.FC<IconProps> = props => {
  return <Icon alt="Stackserver" content={content} {...props} />
}
