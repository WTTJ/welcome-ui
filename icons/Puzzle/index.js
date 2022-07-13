import React from 'react'
import { Icon } from '@welcome-ui/icon'

import content from './content.json'

export function PuzzleIcon(props) {
  return <Icon alt="Puzzle" content={content} {...props} />
}