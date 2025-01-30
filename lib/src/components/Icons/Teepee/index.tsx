import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const TeepeeIcon: React.FC<IconProps> = props => {
  return <Icon alt="Teepee" content={content} {...props} />
}
