import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const XlsxIcon: React.FC<IconProps> = props => {
  return <Icon alt="Xlsx" content={content} {...props} />
}
