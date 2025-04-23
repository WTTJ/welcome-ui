import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const AddressIcon: React.FC<IconProps> = props => {
  return <Icon alt="Address" content={content} {...props} />
}
