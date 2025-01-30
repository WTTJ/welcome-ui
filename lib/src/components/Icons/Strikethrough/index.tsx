import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const StrikethroughIcon: React.FC<IconProps> = props => {
  return <Icon alt="Strikethrough" content={content} {...props} />
}
