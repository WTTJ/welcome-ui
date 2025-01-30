import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const MicroshipIcon: React.FC<IconProps> = props => {
  return <Icon alt="Microship" content={content} {...props} />
}
