import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const CoverLetterIcon: React.FC<IconProps> = props => {
  return <Icon alt="CoverLetter" content={content} {...props} />
}
