import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const PuzzleIcon: React.FC<IconProps> = props => {
  return <Icon alt="Puzzle" content={content} {...props} />
}

export const PuzzleIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
