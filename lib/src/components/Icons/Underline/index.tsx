import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const UnderlineIcon: React.FC<IconProps> = props => {
  return <Icon alt="Underline" content={content} {...props} />
}
