import React from 'react'

import { Select } from '@/components/Select'

import lib from '../../../../lib/package.json'

const VERSION = 'v9'

const versions = [
  { label: `v${lib.version}`, value: VERSION },
  { label: 'v8', value: 'v8' },
  { label: 'v7', value: 'v7' },
  { label: 'v6', value: 'v6' },
  { label: 'v5', value: 'v5' },
  { label: 'v4', value: 'v4' },
  { label: 'v3', value: 'v3' },
]

export const VersionSelector = () => {
  const handleChange = (value: unknown) => {
    if (value === VERSION) return
    window.open(`http://welcome-ui.com/${value}`, '_self')
  }

  return (
    <Select
      className="hidden md:block"
      name="welcome"
      onChange={handleChange}
      options={versions}
      size="sm"
      value={VERSION}
    />
  )
}
