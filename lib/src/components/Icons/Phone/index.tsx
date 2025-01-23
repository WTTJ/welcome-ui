import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const PhoneIcon: React.FC<IconProps> = props => {
  return <Icon alt="Phone" content={content} {...props} />
}
