import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const ResumeIcon: React.FC<IconProps> = props => {
  return <Icon alt="Resume" content={content} {...props} />
}
