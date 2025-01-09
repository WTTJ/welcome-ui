import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const SpannerIcon: React.FC<IconProps> = props => {
  return <Icon alt="Spanner" content={content} {...props} />
}
