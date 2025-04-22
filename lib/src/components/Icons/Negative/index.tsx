import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const NegativeIcon: React.FC<IconProps> = props => {
  return <Icon alt="Negative" content={content} {...props} />
}
