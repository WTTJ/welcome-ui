import React from 'react'

import type { IconProps } from '../../Icon'
import { Icon } from '../../Icon'

import content from './content.json'

export const SourceIcon: React.FC<IconProps> = props => {
  return <Icon alt="Source" content={content} data-wui-icon {...props} />
}
