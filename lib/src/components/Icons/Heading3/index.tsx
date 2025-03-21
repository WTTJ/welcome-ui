import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const Heading3Icon: React.FC<IconProps> = props => {
  return <Icon alt="Heading3" content={content} {...props} />
}
