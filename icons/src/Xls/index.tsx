import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const XlsIcon: React.FC<IconProps> = props => {
  return <Icon alt="Xls" content={content} {...props} />
}

export const XlsIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
