import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const BulkIcon: React.FC<IconProps> = props => {
  return <Icon alt="Bulk" content={content} {...props} />
}

export const BulkIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
