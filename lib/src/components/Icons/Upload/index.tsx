import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const UploadIcon: React.FC<IconProps> = props => {
  return <Icon alt="Upload" content={content} {...props} />
}
