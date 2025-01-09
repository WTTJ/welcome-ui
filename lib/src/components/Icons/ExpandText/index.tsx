import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const ExpandTextIcon: React.FC<IconProps> = props => {
  return <Icon alt="ExpandText" content={content} {...props} />
}
