import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const WoffIcon: React.FC<IconProps> = props => {
  return <Icon alt="Woff" content={content} {...props} />
}
