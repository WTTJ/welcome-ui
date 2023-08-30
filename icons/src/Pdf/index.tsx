import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const PdfIcon: React.FC<IconProps> = props => {
  return <Icon alt="Pdf" content={content} {...props} />
}

export const PdfIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
