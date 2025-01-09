import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const PencilIcon: React.FC<IconProps> = props => {
  return <Icon alt="Pencil" content={content} {...props} />
}
