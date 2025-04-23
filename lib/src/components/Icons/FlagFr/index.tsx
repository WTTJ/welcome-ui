import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const FlagFrIcon: React.FC<IconProps> = props => {
  return <Icon alt="FlagFr" content={content} {...props} />
}
