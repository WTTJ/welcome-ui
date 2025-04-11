'use client'
import Link from 'next/link'

import { Button } from '@/Button'
import { Flex } from '@/Flex'
import { LeftIcon, RightIcon } from '@/Icons'

import type { PageTree } from '~/build-app/types'

import { getName } from '~/build-app/utils/transform-name'

type PrevNextPageProps = {
  basePage: string
  currentId: string
  pages: PageTree
}

export const PrevNextPage = ({ basePage, currentId, pages }: PrevNextPageProps) => {
  const items = pages.reduce((prev, page) => {
    page.pages.map(item => prev.push(`${item.parent ? `${item.parent}/` : ''}${item.id}`))
    return prev
  }, [] as string[])
  const lastItemIndex = items.length - 1
  const currentPageIndex = items.indexOf(currentId)

  return (
    <Flex justifyContent="space-between" mt="3xl">
      {currentPageIndex > 0 ? (
        <Button as={Link} href={`/${basePage}/${items[currentPageIndex - 1]}`} variant="tertiary">
          <LeftIcon />
          <span>{getName(items[currentPageIndex - 1])}</span>
        </Button>
      ) : (
        <div />
      )}
      {currentPageIndex !== lastItemIndex && (
        <Button as={Link} href={`/${basePage}/${items[currentPageIndex + 1]}`} variant="tertiary">
          <span>{getName(items[currentPageIndex + 1])}</span>
          <RightIcon />
        </Button>
      )}
    </Flex>
  )
}
