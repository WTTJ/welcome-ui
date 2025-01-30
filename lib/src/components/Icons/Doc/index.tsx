import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const DocIcon: React.FC<IconProps> = props => {
  return <Icon alt="Doc" content={content} {...props} />
}
