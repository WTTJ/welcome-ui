import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const UnderlineIcon: React.FC<IconProps> = props => {
  return <Icon alt="Underline" content={content} {...props} />
}
