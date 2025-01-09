import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const CopyIcon: React.FC<IconProps> = props => {
  return <Icon alt="Copy" content={content} {...props} />
}
