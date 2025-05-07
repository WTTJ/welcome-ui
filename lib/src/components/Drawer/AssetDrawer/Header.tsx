import React from 'react'

import { ArrowLeftIcon } from '../../Icons'
import { Button } from '../../Button'
import { Text } from '../../Text'

import * as S from './styles'

import type { IconProps } from '@/Icon'
import { Box } from '@/Box'

type HeaderProps = {
  /**
   * Show on right a block, for example an HeaderAction
   */
  action?: React.ReactNode
  /**
   * Icon from Icon component on the gray square
   */
  icon?: React.FC<IconProps>
  /**
   * Add a back icon on header and call function on click
   */
  onBackButtonClick?: (props?: unknown) => void
  /**
   * List of tags
   */
  subtitle?: React.ReactNode
  /**
   * Title of asset
   */
  title: React.ReactNode
}

export const Header: React.FC<HeaderProps> = ({
  action,
  icon,
  onBackButtonClick,
  subtitle,
  title,
}) => {
  return (
    <Box
      alignItems={{ md: 'center' }}
      backgroundColor="neutral-10"
      display="flex"
      flexDirection={{ _: 'column', md: 'row' }}
      gap="xl"
      justifyContent="space-between"
      mb="xl"
      pb="md"
      position="sticky"
      top="-xxl"
      zIndex={1}
    >
      <Box alignItems="center" display="flex" gap={{ _: 'md', md: 'xl' }}>
        {!!onBackButtonClick && (
          <Button onClick={onBackButtonClick} shape="circle" size="lg" variant="ghost">
            <ArrowLeftIcon />
          </Button>
        )}
        {!!icon && <IconBlock icon={icon} />}
        <Box display="flex" flexDirection="column" gap="xxs">
          <Text pr="xl" variant="h3">
            {title}
          </Text>
          {subtitle}
        </Box>
      </Box>
      {action && (
        <Box alignItems="center" display="flex" flexShrink={0} gap="md">
          {action}
        </Box>
      )}
    </Box>
  )
}

export type IconBlockProps = {
  icon: React.FC<IconProps>
  size?: 'sm' | 'md'
}

export const IconBlock: React.FC<IconBlockProps> = ({ icon: Icon, size = 'md' }) => {
  return (
    <S.IconBlock size={size}>
      <Icon color="neutral-90" size={size} />
    </S.IconBlock>
  )
}
