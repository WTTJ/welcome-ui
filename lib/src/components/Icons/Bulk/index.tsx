import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const BulkIcon: React.FC<IconProps> = props => {
  return <Icon alt="Bulk" content={content} {...props} />
}
