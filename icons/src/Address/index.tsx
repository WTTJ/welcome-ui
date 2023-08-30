import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const AddressIcon: React.FC<IconProps> = props => {
  return <Icon alt="Address" content={content} {...props} />
}

export const AddressIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
