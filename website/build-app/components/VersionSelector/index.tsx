import { Select } from '@welcome-ui/select'
import React from 'react'

import { version } from '../../../../lerna.json'

const versions = [
  { value: 'v5', label: `${version}` },
  { value: 'v4', label: 'v4' },
  { value: 'v3', label: 'v3' },
]

export const VersionSelector = () => {
  const handleChange = (value: unknown) => {
    if (['v3', 'v4'].includes(value as string)) {
      window.open(`http://welcome-ui.com/${value}`, '_self')
    }
  }

  return <Select name="welcome" onChange={handleChange} options={versions} size="sm" value="v5" />
}
