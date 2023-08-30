import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const SoundOffIcon: React.FC<IconProps> = props => {
  return <Icon alt="SoundOff" content={content} {...props} />
}

export const SoundOffIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
