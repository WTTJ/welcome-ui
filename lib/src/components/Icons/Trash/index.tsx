import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const TrashIcon: React.FC<IconProps> = props => {
  return <Icon alt="Trash" content={content} {...props} />
}
