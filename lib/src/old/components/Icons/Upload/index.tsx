import React from 'react'

import type { IconProps } from '../../Icon'
import { Icon } from '../../Icon'

import content from './content.json'

export const UploadIcon: React.FC<IconProps> = props => {
  return <Icon alt="Upload" content={content} data-wui-icon {...props} />
}
