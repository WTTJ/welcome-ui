import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const MicIcon: React.FC<IconProps> = props => {
  return <Icon alt="Mic" content={content} {...props} />
}
