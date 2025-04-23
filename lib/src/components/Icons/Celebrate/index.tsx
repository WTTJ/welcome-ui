import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const CelebrateIcon: React.FC<IconProps> = props => {
  return <Icon alt="Celebrate" content={content} {...props} />
}
