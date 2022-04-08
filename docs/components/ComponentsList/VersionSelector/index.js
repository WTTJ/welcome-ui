import { Select } from '@welcome-ui/select'
import React from 'react'

const { version } = require('../../../../lerna.json')

const v3 = 'v3 latest'
const v4 = `${version}`
const versions = [
  { value: v4, label: v4 },
  { value: v3, label: v3 },
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
