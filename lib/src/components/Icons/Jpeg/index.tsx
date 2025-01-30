import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const JpegIcon: React.FC<IconProps> = props => {
  return <Icon alt="Jpeg" content={content} {...props} />
}
