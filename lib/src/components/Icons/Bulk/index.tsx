import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const BulkIcon: React.FC<IconProps> = props => {
  return <Icon alt="Bulk" content={content} {...props} />
}
