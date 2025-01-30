import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const CodeIcon: React.FC<IconProps> = props => {
  return <Icon alt="Code" content={content} {...props} />
}
