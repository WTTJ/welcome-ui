import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const TableRowAddBelowIcon: React.FC<IconProps> = props => {
  return <Icon alt="TableRowAddBelow" content={content} {...props} />
}
