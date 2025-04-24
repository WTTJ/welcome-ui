import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const EducationLevelIcon: React.FC<IconProps> = props => {
  return <Icon alt="EducationLevel" content={content} {...props} />
}
