import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const QuestionIcon = (props: IconProps) => {
  return <Icon alt="Question" content={content} {...props} />
}
