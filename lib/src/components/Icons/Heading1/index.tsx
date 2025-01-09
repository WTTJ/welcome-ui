import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const Heading1Icon: React.FC<IconProps> = props => {
  return <Icon alt="Heading1" content={content} {...props} />
}
