import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const SvgIcon: React.FC<IconProps> = props => {
  return <Icon alt="Svg" content={content} {...props} />
}
