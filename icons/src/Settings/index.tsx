import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const SettingsIcon: React.FC<IconProps> = props => {
  return <Icon alt="Settings" content={content} {...props} />
}

export const SettingsIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
