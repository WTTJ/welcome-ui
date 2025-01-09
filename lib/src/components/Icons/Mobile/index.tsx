import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const MobileIcon: React.FC<IconProps> = props => {
  return <Icon alt="Mobile" content={content} {...props} />
}
