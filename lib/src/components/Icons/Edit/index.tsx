import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const EditIcon: React.FC<IconProps> = props => {
  return <Icon alt="Edit" content={content} {...props} />
}
