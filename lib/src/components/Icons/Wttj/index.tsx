import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const WttjIcon: React.FC<IconProps> = props => {
  return <Icon alt="Wttj" content={content} {...props} />
}
