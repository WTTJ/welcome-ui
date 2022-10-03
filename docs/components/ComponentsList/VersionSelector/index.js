import { Select } from '@welcome-ui/select'
import React from 'react'

import { version } from '../../../../lerna.json'

const versions = [
  { value: 'v5', label: `${version}` },
  { value: 'v4', label: 'v4' },
  { value: 'v3', label: 'v3' },
]

export function VersionSelector() {
  const handleChange = value => {
    if (['v3', 'v4'].includes(value)) {
      window.open(`http://welcome-ui.com/${value}`, '_self')
    }
  }

  return (
    <Select
      name="welcome"
      onChange={handleChange}
      options={versions}
      size="sm"
      value="v5"
      w={150}
    />
  )
}
