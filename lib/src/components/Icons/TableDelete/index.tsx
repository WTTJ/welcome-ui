import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const TableDeleteIcon: React.FC<IconProps> = props => {
  return <Icon alt="TableDelete" content={content} {...props} />
}
