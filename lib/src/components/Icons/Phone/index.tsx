import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const PhoneIcon: React.FC<IconProps> = props => {
  return <Icon alt="Phone" content={content} {...props} />
}
