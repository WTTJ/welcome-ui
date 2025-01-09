import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const ReviewIcon: React.FC<IconProps> = props => {
  return <Icon alt="Review" content={content} {...props} />
}
