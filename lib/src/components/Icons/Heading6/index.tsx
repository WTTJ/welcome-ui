import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const Heading6Icon: React.FC<IconProps> = props => {
  return <Icon alt="Heading6" content={content} {...props} />
}
