import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const PuzzleOutlineIcon: React.FC<IconProps> = props => {
  return <Icon alt="PuzzleOutline" content={content} {...props} />
}
