import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const SoundOnIcon: React.FC<IconProps> = props => {
  return <Icon alt="SoundOn" content={content} {...props} />
}

export const SoundOnIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
