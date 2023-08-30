import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const HandshakeIcon: React.FC<IconProps> = props => {
  return <Icon alt="Handshake" content={content} {...props} />
}

export const HandshakeIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
