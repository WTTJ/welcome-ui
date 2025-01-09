import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const AlertOutlineIcon: React.FC<IconProps> = props => {
  return <Icon alt="AlertOutline" content={content} {...props} />
}
