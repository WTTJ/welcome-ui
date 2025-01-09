import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const AttachmentIcon: React.FC<IconProps> = props => {
  return <Icon alt="Attachment" content={content} {...props} />
}
