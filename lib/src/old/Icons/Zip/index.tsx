import React from 'react'

import type { IconProps } from '../../Icon'
import { Icon } from '../../Icon'

import content from './content.json'

export const ZipIcon: React.FC<IconProps> = props => {
  return <Icon alt="Zip" content={content} data-wui-icon {...props} />
}
