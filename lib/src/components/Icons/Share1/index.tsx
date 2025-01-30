import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const Share1Icon: React.FC<IconProps> = props => {
  return <Icon alt="Share1" content={content} {...props} />
}
