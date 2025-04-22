import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const MaleIcon: React.FC<IconProps> = props => {
  return <Icon alt="Male" content={content} {...props} />
}
