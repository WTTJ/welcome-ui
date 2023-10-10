import React from 'react'

import { Button } from '../packages/Button'
import { BehanceIcon } from '../icons/Behance'
import { DribbbleIcon } from '../icons/Dribbble'
import { FacebookIcon } from '../icons/Facebook'
import { GithubIcon } from '../icons/Github'
import { InstagramIcon } from '../icons/Instagram'
import { LinkedinIcon } from '../icons/Linkedin'
import { StackoverflowIcon } from '../icons/Stackoverflow'
import { YoutubeIcon } from '../icons/Youtube'

export const DefaultFileDropView = ({ openFile }) => {
  return (
    <>
      <h3>Add picture</h3>
      <p>Drag and drop a file here or…</p>
      <Button onClick={openFile} type="button">
        Choose file
      </Button>
    </>
  )
}

export const ITEMS = [
  { value: 'behance', label: 'Behance', icon: BehanceIcon },
  { value: 'dribbble', label: 'Dribbble', icon: DribbbleIcon },
  { value: 'facebook', label: 'Facebook', icon: FacebookIcon },
  { value: 'github', label: 'Github', icon: GithubIcon },
  { value: 'instagram', label: 'Instagram', icon: InstagramIcon },
  { value: 'linkedin', label: 'Linkedin', icon: LinkedinIcon },
  { value: 'stackoverflow', label: 'Stack Overflow', icon: StackoverflowIcon },
  { value: 'youtube', label: 'Youtube', icon: YoutubeIcon },
]
