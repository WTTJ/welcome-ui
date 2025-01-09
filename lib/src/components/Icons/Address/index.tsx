import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const AddressIcon: React.FC<IconProps> = props => {
  return <Icon alt="Address" content={content} {...props} />
}
