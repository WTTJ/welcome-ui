import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const SparklesIcon: React.FC<IconProps> = props => {
  return <Icon alt="Sparkles" content={content} {...props} />
}
