import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const DragAndDropIcon: React.FC<IconProps> = props => {
  return <Icon alt="DragAndDrop" content={content} {...props} />
}
