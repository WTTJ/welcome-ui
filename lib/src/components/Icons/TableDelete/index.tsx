import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const TableDeleteIcon: React.FC<IconProps> = props => {
  return <Icon alt="TableDelete" content={content} {...props} />
}
