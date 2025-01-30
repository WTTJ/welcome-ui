import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const Share2Icon: React.FC<IconProps> = props => {
  return <Icon alt="Share2" content={content} {...props} />
}
