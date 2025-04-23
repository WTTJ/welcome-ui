import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const CoverLetterIcon: React.FC<IconProps> = props => {
  return <Icon alt="CoverLetter" content={content} {...props} />
}
