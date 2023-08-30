import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const HeadingIcon: React.FC<IconProps> = props => {
  return <Icon alt="Heading" content={content} {...props} />
}

export const HeadingIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
