import React, { PureComponent } from 'react'
import { string, oneOf } from 'prop-types'

import { IconSvg } from './styles'
import icons from './icons'

export class Icon extends PureComponent {
  constructor(props) {
    super(props)
    const { icon } = this.props
    const iconConfig = icons[icon.toLowerCase()]
    if (!iconConfig) {
      return
    }

    this.setIconSize()
    this.iconConfig = iconConfig
    this.viewBox = `0 0 100 100`
    if (iconConfig.viewBox) {
      this.viewBox = iconConfig.viewBox
    }
  }

  setIconSize = () => {
    const { size } = this.props
    switch (size) {
      case 'xl':
        this.w = 48
        this.h = 48
        break
      case 'lg':
        this.w = 32
        this.h = 32
        break
      case 'sm':
        this.w = 16
        this.h = 16
        break
      case 'md':
      default:
        this.w = 24
        this.h = 24
    }
  }

  render() {
    if (!this.iconConfig) return null
    return (
      <IconSvg
        viewBox={this.viewBox}
        width={this.w}
        height={this.h}
        stroked={this.iconConfig.stroked}
        dangerouslySetInnerHTML={{ __html: this.iconConfig.block }}
      />
    )
  }
}

Icon.propTypes = {
  /** Icon name */
  icon: string,
  /** Icon size` */
  size: oneOf(['sm', 'md', 'lg', 'xl'])
}

// Specifies the default values for props:
Icon.defaultProps = {
  size: 'md'
}

export default Icon
