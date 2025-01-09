import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const AddIcon: React.FC<IconProps> = props => {
  return <Icon alt="Add" content={content} {...props} />
}
