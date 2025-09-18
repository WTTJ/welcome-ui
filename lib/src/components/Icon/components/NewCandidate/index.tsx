import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const NewCandidateIcon = (props: IconProps) => {
  return <Icon alt="NewCandidate" content={content} {...props} />
}
