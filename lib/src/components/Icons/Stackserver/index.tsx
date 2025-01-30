import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const StackserverIcon: React.FC<IconProps> = props => {
  return <Icon alt="Stackserver" content={content} {...props} />
}
