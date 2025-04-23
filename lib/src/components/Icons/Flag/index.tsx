import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const FlagIcon: React.FC<IconProps> = props => {
  return <Icon alt="Flag" content={content} {...props} />
}
