import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const HeadingIcon: React.FC<IconProps> = props => {
  return <Icon alt="Heading" content={content} {...props} />
}
