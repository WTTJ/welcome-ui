import React from 'react'

import type { IconProps } from '../../Icon'
import { Icon } from '../../Icon'

import content from './content.json'

export const TrashIcon: React.FC<IconProps> = props => {
  return <Icon alt="Trash" content={content} data-wui-icon {...props} />
}
