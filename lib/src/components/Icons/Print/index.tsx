import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const PrintIcon: React.FC<IconProps> = props => {
  return <Icon alt="Print" content={content} {...props} />
}
