import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const FlagEsIcon: React.FC<IconProps> = props => {
  return <Icon alt="FlagEs" content={content} {...props} />
}
