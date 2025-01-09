import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const CrownIcon: React.FC<IconProps> = props => {
  return <Icon alt="Crown" content={content} {...props} />
}
