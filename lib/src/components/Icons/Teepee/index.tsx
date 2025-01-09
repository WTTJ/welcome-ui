import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const TeepeeIcon: React.FC<IconProps> = props => {
  return <Icon alt="Teepee" content={content} {...props} />
}
