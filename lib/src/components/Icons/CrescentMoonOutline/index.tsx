import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const CrescentMoonOutlineIcon: React.FC<IconProps> = props => {
  return <Icon alt="CrescentMoonOutline" content={content} {...props} />
}
