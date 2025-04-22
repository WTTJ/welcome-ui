import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const FacebookIcon: React.FC<IconProps> = props => {
  return <Icon alt="Facebook" content={content} {...props} />
}
