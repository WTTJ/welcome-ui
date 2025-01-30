import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const ShieldIcon: React.FC<IconProps> = props => {
  return <Icon alt="Shield" content={content} {...props} />
}
