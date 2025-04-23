import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const WttjIcon: React.FC<IconProps> = props => {
  return <Icon alt="Wttj" content={content} {...props} />
}
