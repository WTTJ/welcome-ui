import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const SunIcon: React.FC<IconProps> = props => {
  return <Icon alt="Sun" content={content} {...props} />
}
