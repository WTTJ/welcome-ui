import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const DragAndDropIcon: React.FC<IconProps> = props => {
  return <Icon alt="DragAndDrop" content={content} {...props} />
}
