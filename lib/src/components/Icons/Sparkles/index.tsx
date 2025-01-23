import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const SparklesIcon: React.FC<IconProps> = props => {
  return <Icon alt="Sparkles" content={content} {...props} />
}
