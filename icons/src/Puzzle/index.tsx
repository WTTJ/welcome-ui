import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const PuzzleIcon: React.FC<IconProps> = props => {
  return <Icon alt="Puzzle" content={content} {...props} />
}
