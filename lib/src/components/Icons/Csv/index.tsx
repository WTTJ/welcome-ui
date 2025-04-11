import React from 'react'

import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const CsvIcon: React.FC<IconProps> = props => {
  return <Icon alt="Csv" content={content} {...props} />
}
