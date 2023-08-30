import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const CsvIcon: React.FC<IconProps> = props => {
  return <Icon alt="Csv" content={content} {...props} />
}

export const CsvIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
