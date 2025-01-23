import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const Book2Icon: React.FC<IconProps> = props => {
  return <Icon alt="Book2" content={content} {...props} />
}
