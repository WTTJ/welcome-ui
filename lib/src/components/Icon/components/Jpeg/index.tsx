import React from 'react'

import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const JpegIcon: React.FC<IconProps> = props => {
  return <Icon alt="Jpeg" content={content} {...props} />
}
