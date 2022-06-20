import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const SettingsIcon: React.FC<IconProps> = props => {
  return <Icon alt="Settings" content={content} {...props} />
}
