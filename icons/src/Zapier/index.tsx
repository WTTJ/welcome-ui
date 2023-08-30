import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const ZapierIcon: React.FC<IconProps> = props => {
  return <Icon alt="Zapier" content={content} {...props} />
}

export const ZapierIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
