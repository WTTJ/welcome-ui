import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const CheckIcon: React.FC<IconProps> = props => {
  return <Icon alt="Check" content={content} {...props} />
}
