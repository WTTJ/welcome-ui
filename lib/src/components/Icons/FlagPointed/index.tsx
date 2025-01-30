import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const FlagPointedIcon: React.FC<IconProps> = props => {
  return <Icon alt="FlagPointed" content={content} {...props} />
}
