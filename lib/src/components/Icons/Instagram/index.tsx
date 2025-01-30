import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const InstagramIcon: React.FC<IconProps> = props => {
  return <Icon alt="Instagram" content={content} {...props} />
}
