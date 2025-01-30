import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const TableIcon: React.FC<IconProps> = props => {
  return <Icon alt="Table" content={content} {...props} />
}
