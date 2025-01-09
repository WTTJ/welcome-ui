import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const FlagPointedIcon: React.FC<IconProps> = props => {
  return <Icon alt="FlagPointed" content={content} {...props} />
}
