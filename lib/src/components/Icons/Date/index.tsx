import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const DateIcon: React.FC<IconProps> = props => {
  return <Icon alt="Date" content={content} {...props} />
}
