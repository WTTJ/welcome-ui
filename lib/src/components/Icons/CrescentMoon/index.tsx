import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const CrescentMoonIcon: React.FC<IconProps> = props => {
  return <Icon alt="CrescentMoon" content={content} {...props} />
}
