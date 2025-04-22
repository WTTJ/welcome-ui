import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const AlertOutlineIcon: React.FC<IconProps> = props => {
  return <Icon alt="AlertOutline" content={content} {...props} />
}
