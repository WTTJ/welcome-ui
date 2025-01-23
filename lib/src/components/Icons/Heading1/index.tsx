import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const Heading1Icon: React.FC<IconProps> = props => {
  return <Icon alt="Heading1" content={content} {...props} />
}
