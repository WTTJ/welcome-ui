import { Select } from '@welcome-ui/select'
import React from 'react'

import { version } from '../../../../lerna.json'

const v3 = '3.13.1'
const v4 = `${version}`
const versions = [
  { value: v3, label: v3 },
  { value: v4, label: v4 },
]

export function VersionSelector() {
  const handleChange = value => {
    if (value === v3) {
      window.open('http://welcome-ui.com/v3', '_self')
    }
  }

  return (
    <Select
      name="welcome"
      onChange={handleChange}
      options={versions}
      size="sm"
      value={v4}
      w={150}
    />
  )
}
