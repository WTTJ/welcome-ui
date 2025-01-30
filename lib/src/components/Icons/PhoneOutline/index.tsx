import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const PhoneOutlineIcon: React.FC<IconProps> = props => {
  return <Icon alt="PhoneOutline" content={content} {...props} />
}
