import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const TrashIcon: React.FC<IconProps> = props => {
  return <Icon alt="Trash" content={content} {...props} />
}
