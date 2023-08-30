import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const LanguageIcon: React.FC<IconProps> = props => {
  return <Icon alt="Language" content={content} {...props} />
}

export const LanguageIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
