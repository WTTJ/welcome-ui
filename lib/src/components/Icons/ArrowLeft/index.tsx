import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const ArrowLeftIcon: React.FC<IconProps> = props => {
  return <Icon alt="ArrowLeft" content={content} {...props} />
}
