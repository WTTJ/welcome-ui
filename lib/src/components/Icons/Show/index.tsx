import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const ShowIcon: React.FC<IconProps> = props => {
  return <Icon alt="Show" content={content} {...props} />
}
