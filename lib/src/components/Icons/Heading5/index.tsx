import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const Heading5Icon: React.FC<IconProps> = props => {
  return <Icon alt="Heading5" content={content} {...props} />
}
