import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const Heading2Icon: React.FC<IconProps> = props => {
  return <Icon alt="Heading2" content={content} {...props} />
}
