import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const Woff2Icon: React.FC<IconProps> = props => {
  return <Icon alt="Woff2" content={content} {...props} />
}

export const Woff2IconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
