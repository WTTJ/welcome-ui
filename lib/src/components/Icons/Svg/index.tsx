import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const SvgIcon: React.FC<IconProps> = props => {
  return <Icon alt="Svg" content={content} {...props} />
}
