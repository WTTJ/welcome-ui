import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const SpannerIcon: React.FC<IconProps> = props => {
  return <Icon alt="Spanner" content={content} {...props} />
}
