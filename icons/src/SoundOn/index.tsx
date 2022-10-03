import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const SoundOnIcon: React.FC<IconProps> = props => {
  return <Icon alt="SoundOn" content={content} {...props} />
}
