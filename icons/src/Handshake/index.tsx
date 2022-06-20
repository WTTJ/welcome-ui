import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const HandshakeIcon: React.FC<IconProps> = props => {
  return <Icon alt="Handshake" content={content} {...props} />
}
