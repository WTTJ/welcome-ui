import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const AddIcon: React.FC<IconProps> = props => {
  return <Icon alt="Add" content={content} {...props} />
}
