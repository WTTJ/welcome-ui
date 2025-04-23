import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const GifIcon: React.FC<IconProps> = props => {
  return <Icon alt="Gif" content={content} {...props} />
}
