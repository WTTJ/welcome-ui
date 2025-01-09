import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const YoutubeIcon: React.FC<IconProps> = props => {
  return <Icon alt="Youtube" content={content} {...props} />
}
