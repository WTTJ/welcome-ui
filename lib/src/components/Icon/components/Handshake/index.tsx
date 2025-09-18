import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const HandshakeIcon = (props: IconProps) => {
  return <Icon alt="Handshake" content={content} {...props} />
}
