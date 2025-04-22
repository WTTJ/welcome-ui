import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const NpmIcon: React.FC<IconProps> = props => {
  return <Icon alt="Npm" content={content} {...props} />
}
