import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const Book2Icon: React.FC<IconProps> = props => {
  return <Icon alt="Book2" content={content} {...props} />
}

export const Book2IconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
