import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const CsvIcon = (props: IconProps) => {
  return <Icon alt="Csv" content={content} {...props} />
}
