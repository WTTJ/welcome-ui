import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const PencilIcon: React.FC<IconProps> = props => {
  return <Icon alt="Pencil" content={content} {...props} />
}
