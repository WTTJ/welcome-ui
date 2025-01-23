import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const SoundOnIcon: React.FC<IconProps> = props => {
  return <Icon alt="SoundOn" content={content} {...props} />
}
