import { forwardRef } from 'react'

import { Text } from '@/components/Text'
import { classNames } from '@/utils'

import modalStyles from './assets.module.scss'
import { AssetTitle } from './AssetTitle'
import type { AssetWithTitleProps } from './types'

const cx = classNames(modalStyles)

export const AssetWithTitle = forwardRef<HTMLDivElement, AssetWithTitleProps>(
  ({ children, customContent, subtitle, title, ...rest }, ref) => {
    return (
      <div className={cx('root', 'asset-wrapper')} ref={ref} {...rest}>
        {children}
        <div className={cx('root', 'asset-title-wrapper')}>
          {customContent}
          {!customContent && subtitle ? <Text variant="subtitle-sm">{subtitle}</Text> : null}
          {!customContent && title ? <AssetTitle>{title}</AssetTitle> : null}
        </div>
      </div>
    )
  }
)
