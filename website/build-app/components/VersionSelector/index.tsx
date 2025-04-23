import React from 'react'

import lib from '../../../../lib/package.json'

import { Select } from '@/Select'

const VERSION = 'v8'

const versions = [
  { value: VERSION, label: `v${lib.version}` },
  { value: 'v7', label: 'v7' },
  { value: 'v6', label: 'v6' },
  { value: 'v5', label: 'v5' },
  { value: 'v4', label: 'v4' },
  { value: 'v3', label: 'v3' },
]

export const VersionSelector = () => {
  const handleChange = (value: unknown) => {
    if (value === VERSION) return
    window.open(`http://welcome-ui.com/${value}`, '_self')
  }

  return (
    <Select
      display={{ _: 'none', md: 'block' }}
      name="welcome"
      onChange={handleChange}
      options={versions}
      size="sm"
      value={VERSION}
    />
  )
}
