import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const ArrowLeftIcon: React.FC<IconProps> = props => {
  return <Icon alt="ArrowLeft" content={content} {...props} />
}
