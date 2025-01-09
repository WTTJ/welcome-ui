import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const JpegIcon: React.FC<IconProps> = props => {
  return <Icon alt="Jpeg" content={content} {...props} />
}
