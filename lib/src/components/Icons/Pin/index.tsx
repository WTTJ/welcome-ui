import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const PinIcon: React.FC<IconProps> = props => {
  return <Icon alt="Pin" content={content} {...props} />
}
