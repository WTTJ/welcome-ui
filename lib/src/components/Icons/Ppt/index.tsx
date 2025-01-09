import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const PptIcon: React.FC<IconProps> = props => {
  return <Icon alt="Ppt" content={content} {...props} />
}
