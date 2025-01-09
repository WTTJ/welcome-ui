import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const EditIcon: React.FC<IconProps> = props => {
  return <Icon alt="Edit" content={content} {...props} />
}
