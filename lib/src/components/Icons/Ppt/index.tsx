import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const PptIcon: React.FC<IconProps> = props => {
  return <Icon alt="Ppt" content={content} {...props} />
}
