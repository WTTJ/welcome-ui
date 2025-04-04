import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const TtfIcon: React.FC<IconProps> = props => {
  return <Icon alt="Ttf" content={content} {...props} />
}
