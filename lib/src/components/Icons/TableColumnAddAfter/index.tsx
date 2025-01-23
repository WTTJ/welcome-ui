import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const TableColumnAddAfterIcon: React.FC<IconProps> = props => {
  return <Icon alt="TableColumnAddAfter" content={content} {...props} />
}
