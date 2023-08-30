import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const FolderIcon: React.FC<IconProps> = props => {
  return <Icon alt="Folder" content={content} {...props} />
}

export const FolderIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
