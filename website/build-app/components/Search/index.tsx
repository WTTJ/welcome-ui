'use client'
import { DocSearchModal } from '@docsearch/react'
import { useEffect, useState } from 'react'

import { Button } from '@/components/Button'
import { Icon } from '@/components/Icon'

import '@docsearch/css'

import { Tag } from '@/components/Tag'

export const Search = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleKeys = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen(true)
      }

      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeys, false)

    return () => {
      document.removeEventListener('keydown', handleKeys, false)
    }
  }, [])

  return (
    <>
      <Button onClick={() => setIsOpen(true)} size="md" variant="secondary">
        <Icon name="search" />
        <span>Search</span>
        <Tag size="md">⌘K</Tag>
      </Button>
      {isOpen ? (
        <DocSearchModal
          apiKey="32543c62b03cbc6b714a873dca1feec4"
          appId="1ZI5OZ0946"
          indexName="welcome-ui"
          initialScrollY={window.scrollY}
          onClose={() => setIsOpen(false)}
          placeholder="Search..."
        />
      ) : null}
    </>
  )
}
