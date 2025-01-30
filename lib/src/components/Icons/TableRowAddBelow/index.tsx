import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const TableRowAddBelowIcon: React.FC<IconProps> = props => {
  return <Icon alt="TableRowAddBelow" content={content} {...props} />
}
