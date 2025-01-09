import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const PinIcon: React.FC<IconProps> = props => {
  return <Icon alt="Pin" content={content} {...props} />
}
