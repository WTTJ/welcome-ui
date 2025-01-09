import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const HeadingIcon: React.FC<IconProps> = props => {
  return <Icon alt="Heading" content={content} {...props} />
}
