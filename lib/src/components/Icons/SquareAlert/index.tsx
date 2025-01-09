import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const SquareAlertIcon: React.FC<IconProps> = props => {
  return <Icon alt="SquareAlert" content={content} {...props} />
}
