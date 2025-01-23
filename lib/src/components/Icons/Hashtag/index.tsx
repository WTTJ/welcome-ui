import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const HashtagIcon: React.FC<IconProps> = props => {
  return <Icon alt="Hashtag" content={content} {...props} />
}
