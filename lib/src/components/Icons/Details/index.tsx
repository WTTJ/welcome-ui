import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const DetailsIcon: React.FC<IconProps> = props => {
  return <Icon alt="Details" content={content} {...props} />
}
