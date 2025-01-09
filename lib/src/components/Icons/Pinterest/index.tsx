import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const PinterestIcon: React.FC<IconProps> = props => {
  return <Icon alt="Pinterest" content={content} {...props} />
}
