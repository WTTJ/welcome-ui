import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const SubtitleIcon: React.FC<IconProps> = props => {
  return <Icon alt="Subtitle" content={content} {...props} />
}
