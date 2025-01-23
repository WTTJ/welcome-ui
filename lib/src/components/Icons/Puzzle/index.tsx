import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const PuzzleIcon: React.FC<IconProps> = props => {
  return <Icon alt="Puzzle" content={content} {...props} />
}
