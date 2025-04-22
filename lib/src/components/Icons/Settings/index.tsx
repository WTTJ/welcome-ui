import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const SettingsIcon: React.FC<IconProps> = props => {
  return <Icon alt="Settings" content={content} {...props} />
}
