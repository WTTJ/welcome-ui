import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const DocIcon: React.FC<IconProps> = props => {
  return <Icon alt="Doc" content={content} {...props} />
}
