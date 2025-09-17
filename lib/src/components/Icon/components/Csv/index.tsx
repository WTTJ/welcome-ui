import React from 'react'

import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const CsvIcon: React.FC<IconProps> = props => {
  return <Icon alt="Csv" content={content} {...props} />
}
