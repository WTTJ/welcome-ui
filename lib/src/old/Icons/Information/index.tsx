import React from 'react'

import type { IconProps } from '../../Icon'
import { Icon } from '../../Icon'

import content from './content.json'

export const InformationIcon: React.FC<IconProps> = props => {
  return <Icon alt="Information" content={content} data-wui-icon {...props} />
}
