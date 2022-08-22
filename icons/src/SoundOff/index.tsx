import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const SoundOffIcon: React.FC<IconProps> = props => {
  return <Icon alt="SoundOff" content={content} {...props} />
}
