'use client'
import { useEffect, useState } from 'react'
import { DocSearchModal } from '@docsearch/react'
import { InputText } from 'welcome-ui/InputText'
import { IconFont } from 'welcome-ui/IconFont'
import '@docsearch/css'

export const Search = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleKeys = (e: KeyboardEvent) => {
      if (e.key === '45') {
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
      <InputText
        icon={<IconFont.Search />}
        maxW="100%"
        onClick={() => setIsOpen(true)}
        onFocus={() => setIsOpen(true)}
        placeholder="Search all pages"
        size="sm"
        w={300}
      />
      {isOpen && (
        <DocSearchModal
          apiKey="32543c62b03cbc6b714a873dca1feec4"
          appId="1ZI5OZ0946"
          indexName="welcome-ui"
          initialScrollY={window.scrollY}
          onClose={() => setIsOpen(false)}
          placeholder="Search all pages"
        />
      )}
    </>
  )
}
