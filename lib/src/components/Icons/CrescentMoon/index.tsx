import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const CrescentMoonIcon: React.FC<IconProps> = props => {
  return <Icon alt="CrescentMoon" content={content} {...props} />
}
