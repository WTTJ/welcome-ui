import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const GifIcon: React.FC<IconProps> = props => {
  return <Icon alt="Gif" content={content} {...props} />
}
