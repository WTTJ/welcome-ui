import React from 'react'

import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const Woff2Icon: React.FC<IconProps> = props => {
  return <Icon alt="Woff2" content={content} {...props} />
}
