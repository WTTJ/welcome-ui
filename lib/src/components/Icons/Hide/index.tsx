import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const HideIcon: React.FC<IconProps> = props => {
  return <Icon alt="Hide" content={content} {...props} />
}
