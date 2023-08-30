import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const XlsxIcon: React.FC<IconProps> = props => {
  return <Icon alt="Xlsx" content={content} {...props} />
}

export const XlsxIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
