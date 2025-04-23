import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const TableColumnAddBeforeIcon: React.FC<IconProps> = props => {
  return <Icon alt="TableColumnAddBefore" content={content} {...props} />
}
