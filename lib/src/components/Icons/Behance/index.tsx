import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const BehanceIcon: React.FC<IconProps> = props => {
  return <Icon alt="Behance" content={content} {...props} />
}
