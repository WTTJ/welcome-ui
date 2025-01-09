import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const DateIcon: React.FC<IconProps> = props => {
  return <Icon alt="Date" content={content} {...props} />
}
