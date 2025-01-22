import { Select } from 'welcome-ui/Select'
import React from 'react'

import lib from '../../../../lib/package.json'

const versions = [
  { value: 'v6', label: `${lib.version}` },
  { value: 'v5', label: 'v5' },
  { value: 'v4', label: 'v4' },
  { value: 'v3', label: 'v3' },
]

export const VersionSelector = () => {
  const handleChange = (value: unknown) => {
    if (['v3', 'v4', 'v5'].includes(value as string)) {
      window.open(`http://welcome-ui.com/${value}`, '_self')
    }
  }

  return (
    <Select
      display={{ _: 'none', md: 'block' }}
      name="welcome"
      onChange={handleChange}
      options={versions}
      size="sm"
      value="v6"
    />
  )
}
