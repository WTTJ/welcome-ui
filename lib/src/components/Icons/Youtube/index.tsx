import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const YoutubeIcon: React.FC<IconProps> = props => {
  return <Icon alt="Youtube" content={content} {...props} />
}
