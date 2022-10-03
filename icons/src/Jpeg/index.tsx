import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const JpegIcon: React.FC<IconProps> = props => {
  return <Icon alt="Jpeg" content={content} {...props} />
}
