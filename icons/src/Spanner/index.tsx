import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const SpannerIcon: React.FC<IconProps> = props => {
  return <Icon alt="Spanner" content={content} {...props} />
}

export const SpannerIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
