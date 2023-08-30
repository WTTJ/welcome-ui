import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const FlagCsIcon: React.FC<IconProps> = props => {
  return <Icon alt="FlagCs" content={content} {...props} />
}

export const FlagCsIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
