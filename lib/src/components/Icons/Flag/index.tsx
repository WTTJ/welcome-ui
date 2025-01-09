import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const FlagIcon: React.FC<IconProps> = props => {
  return <Icon alt="Flag" content={content} {...props} />
}
