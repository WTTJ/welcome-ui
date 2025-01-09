import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const PromoteIcon: React.FC<IconProps> = props => {
  return <Icon alt="Promote" content={content} {...props} />
}
