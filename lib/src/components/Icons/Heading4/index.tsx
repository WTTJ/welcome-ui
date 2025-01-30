import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const Heading4Icon: React.FC<IconProps> = props => {
  return <Icon alt="Heading4" content={content} {...props} />
}
