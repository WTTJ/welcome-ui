import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const Heading2Icon: React.FC<IconProps> = props => {
  return <Icon alt="Heading2" content={content} {...props} />
}
