import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const FolderIcon: React.FC<IconProps> = props => {
  return <Icon alt="Folder" content={content} {...props} />
}
