import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const StrikethroughIcon: React.FC<IconProps> = props => {
  return <Icon alt="Strikethrough" content={content} {...props} />
}
