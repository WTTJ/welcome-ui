import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const SquareAlertIcon: React.FC<IconProps> = props => {
  return <Icon alt="SquareAlert" content={content} {...props} />
}
