import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const FlagSkIcon: React.FC<IconProps> = props => {
  return <Icon alt="FlagSk" content={content} {...props} />
}
