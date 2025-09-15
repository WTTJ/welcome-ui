import React from 'react'

import type { IconProps } from '../../Icon'
import { Icon } from '../../Icon'

import content from './content.json'

export const SparklesIcon: React.FC<IconProps> = props => {
  return <Icon alt="Sparkles" content={content} data-wui-icon {...props} />
}
