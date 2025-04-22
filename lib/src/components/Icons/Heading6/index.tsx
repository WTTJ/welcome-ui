import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const Heading6Icon: React.FC<IconProps> = props => {
  return <Icon alt="Heading6" content={content} {...props} />
}
