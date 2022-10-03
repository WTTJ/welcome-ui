import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const SpannerIcon: React.FC<IconProps> = props => {
  return <Icon alt="Spanner" content={content} {...props} />
}
