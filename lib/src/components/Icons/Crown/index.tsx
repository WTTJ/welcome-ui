import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const CrownIcon: React.FC<IconProps> = props => {
  return <Icon alt="Crown" content={content} {...props} />
}
