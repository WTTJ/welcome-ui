import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const SunIcon: React.FC<IconProps> = props => {
  return <Icon alt="Sun" content={content} {...props} />
}
