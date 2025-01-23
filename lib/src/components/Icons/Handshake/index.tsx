import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const HandshakeIcon: React.FC<IconProps> = props => {
  return <Icon alt="Handshake" content={content} {...props} />
}
