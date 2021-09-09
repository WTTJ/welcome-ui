import React from 'react'
import { Icon } from '@welcome-ui/icon'

import content from './content.json'

export function SvgIcon(props) {
  return <Icon alt="Svg" content={content} {...props} />
}
