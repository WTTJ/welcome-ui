import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const CsvIcon: React.FC<IconProps> = props => {
  return <Icon alt="Csv" content={content} {...props} />
}
