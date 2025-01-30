import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const CsvIcon: React.FC<IconProps> = props => {
  return <Icon alt="Csv" content={content} {...props} />
}
