import {
  BehanceIcon,
  DribbbleIcon,
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  StackoverflowIcon,
  TwitterIcon,
  XingIcon,
  YoutubeIcon,
} from '@welcome-ui/icons'

export const ITEMS = [
  { value: 'behance', label: 'Behance', icon: BehanceIcon },
  { value: 'dribbble', label: 'Dribbble', icon: DribbbleIcon },
  { value: 'facebook', label: 'Facebook', icon: FacebookIcon },
  { value: 'github', label: 'Github', icon: GithubIcon },
  { value: 'instagram', label: 'Instagram', icon: InstagramIcon },
  { value: 'linkedin', label: 'Linkedin', icon: LinkedinIcon },
  { value: 'stackoverflow', label: 'Stack Overflow', icon: StackoverflowIcon },
  { value: 'twitter', label: 'Twitter', icon: TwitterIcon },
  { value: 'xing', label: 'Xing', icon: XingIcon },
  { value: 'youtube', label: 'Youtube', icon: YoutubeIcon },
]

export const OPT_GROUP_ITEMS = [
  {
    label: 'Professional networks',
    options: [
      { value: 'behance', label: 'Behance', icon: BehanceIcon },
      { value: 'dribbble', label: 'Dribbble', icon: DribbbleIcon },
      { value: 'github', label: 'Github', icon: GithubIcon },
      { value: 'linkedin', label: 'Linkedin', icon: LinkedinIcon },
      { value: 'stackoverflow', label: 'Stack Overflow', icon: StackoverflowIcon },
      { value: 'xing', label: 'Xing', icon: XingIcon },
    ],
  },
  {
    label: 'Personal networks',
    options: [
      { value: 'instagram', label: 'Instagram', icon: InstagramIcon },
      { value: 'facebook', label: 'Facebook', icon: FacebookIcon },
      { value: 'twitter', label: 'Twitter', icon: TwitterIcon },
      { value: 'youtube', label: 'Youtube', icon: YoutubeIcon },
    ],
  },
]

export const TOOLTIP_PLACEMENT_OPTIONS = [
  { value: 'top-start', label: 'top-start' },
  { value: 'top', label: 'top' },
  { value: 'top-end', label: 'top-end' },
  { value: 'right-start', label: 'right-start' },
  { value: 'right', label: 'right' },
  { value: 'right-end', label: 'right-end' },
  { value: 'bottom-start', label: 'bottom-start' },
  { value: 'bottom', label: 'bottom' },
  { value: 'bottom-end', label: 'bottom-end' },
  { value: 'left-start', label: 'left-start' },
  { value: 'left', label: 'left' },
  { value: 'left-end', label: 'left-end' },
]

export { default as EMOJIS } from '../packages/EmojiPicker/src/basicEmojis.json'
