import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const DownloadIcon: React.FC<IconProps> = props => {
  return <Icon alt="Download" content={content} {...props} />
}

export const DownloadIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
