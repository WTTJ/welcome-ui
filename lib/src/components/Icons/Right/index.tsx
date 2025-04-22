import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const RightIcon: React.FC<IconProps> = props => {
  return <Icon alt="Right" content={content} {...props} />
}
