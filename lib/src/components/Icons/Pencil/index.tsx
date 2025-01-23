import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const PencilIcon: React.FC<IconProps> = props => {
  return <Icon alt="Pencil" content={content} {...props} />
}
