/* eslint-disable react/prop-types */
import React from 'react'

import { Button } from '../packages/Button'

export const DefaultFileDropView = ({ openFile }) => (
  <>
    <h3>Add picture</h3>
    <p>Drag and drop a file here or…</p>
    <Button onClick={openFile} type="button">
      Choose file
    </Button>
  </>
)

export const ITEMS = [
  { value: 'behance', label: 'Behance' },
  { value: 'dribbble', label: 'Dribbble' },
  { value: 'facebook', label: 'Facebook' },
  { value: 'github', label: 'Github' },
  { value: 'instagram', label: 'Instagram' },
  { value: 'linkedin', label: 'Linkedin' },
  { value: 'stackoverflow', label: 'Stack Overflow' },
  { value: 'twitter', label: 'Twitter' },
  { value: 'xing', label: 'Xing' },
  { value: 'youtube', label: 'Youtube' }
]