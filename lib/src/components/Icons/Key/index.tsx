import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const KeyIcon: React.FC<IconProps> = props => {
  return <Icon alt="Key" content={content} {...props} />
}
