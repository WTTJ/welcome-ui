import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const ActionsIcon: React.FC<IconProps> = props => {
  return <Icon alt="Actions" content={content} {...props} />
}
