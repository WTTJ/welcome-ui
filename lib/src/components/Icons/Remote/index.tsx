import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const RemoteIcon: React.FC<IconProps> = props => {
  return <Icon alt="Remote" content={content} {...props} />
}
