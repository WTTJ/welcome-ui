import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const PuzzleIcon: React.FC<IconProps> = props => {
  return <Icon alt="Puzzle" content={content} {...props} />
}
