import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const Woff2Icon: React.FC<IconProps> = props => {
  return <Icon alt="Woff2" content={content} {...props} />
}
