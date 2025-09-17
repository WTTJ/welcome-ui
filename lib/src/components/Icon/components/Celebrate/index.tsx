import React from 'react'

import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const CelebrateIcon: React.FC<IconProps> = props => {
  return <Icon alt="Celebrate" content={content} {...props} />
}
