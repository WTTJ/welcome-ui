import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const TwitterIcon: React.FC<IconProps> = props => {
  return <Icon alt="Twitter" content={content} {...props} />
}
