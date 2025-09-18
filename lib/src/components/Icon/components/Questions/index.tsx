import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const QuestionsIcon = (props: IconProps) => {
  return <Icon alt="Questions" content={content} {...props} />
}
