import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const SuccessIcon: React.FC<IconProps> = props => {
  return <Icon alt="Success" content={content} {...props} />
}
