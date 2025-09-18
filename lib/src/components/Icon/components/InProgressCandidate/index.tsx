import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const InProgressCandidateIcon = (props: IconProps) => {
  return <Icon alt="InProgressCandidate" content={content} {...props} />
}
