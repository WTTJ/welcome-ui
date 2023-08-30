import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const DocxIcon: React.FC<IconProps> = props => {
  return <Icon alt="Docx" content={content} {...props} />
}

export const DocxIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
