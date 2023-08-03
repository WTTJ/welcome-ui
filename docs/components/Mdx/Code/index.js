/* eslint-disable react/jsx-max-depth */

import * as React from 'react'
import { LivePreview, LiveProvider } from 'react-live'
import theme from 'prism-react-renderer/themes/nightOwl'
import NextLink from 'next/link'
import dateFR from 'date-fns/locale/fr'
import * as yup from 'yup'
import { Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import dynamic from 'next/dynamic'

// Welcome UI
import * as Accordion from '@welcome-ui/accordion'
import { Alert } from '@welcome-ui/alert'
import { AspectRatio } from '@welcome-ui/aspect-ratio'
import { Avatar } from '@welcome-ui/avatar'
import { Badge } from '@welcome-ui/badge'
import { Box } from '@welcome-ui/box'
import { Breadcrumb } from '@welcome-ui/breadcrumb'
import { Button } from '@welcome-ui/button'
import { ButtonGroup } from '@welcome-ui/button-group'
import { Card } from '@welcome-ui/card'
import { Checkbox } from '@welcome-ui/checkbox'
import { DatePicker } from '@welcome-ui/date-picker'
import { DateTimePicker } from '@welcome-ui/date-time-picker'
import * as Drawer from '@welcome-ui/drawer'
import * as DropdownMenu from '@welcome-ui/dropdown-menu'
import * as Emoji from '@welcome-ui/emoji'
import * as EmojiPicker from '@welcome-ui/emoji-picker'
import { Field } from '@welcome-ui/field'
import { FieldGroup } from '@welcome-ui/field-group'
import { FileDrop } from '@welcome-ui/file-drop'
import * as Files from '@welcome-ui/files'
import { FileUpload } from '@welcome-ui/file-upload'
import { Flex } from '@welcome-ui/flex'
import { Grid } from '@welcome-ui/grid'
import { Hint } from '@welcome-ui/hint'
import { Icon } from '@welcome-ui/icon'
import * as Icons from '@welcome-ui/icons'
import * as IconFont from '@welcome-ui/icons.font'
import { InputText } from '@welcome-ui/input-text'
import { Label } from '@welcome-ui/label'
import { Link } from '@welcome-ui/link'
import { Loader } from '@welcome-ui/loader'
const MarkdownEditor = dynamic(
  () => import('@welcome-ui/markdown-editor').then(mod => mod.MarkdownEditor),
  { ssr: false }
)
import * as Modal from '@welcome-ui/modal'
import { Pagination } from '@welcome-ui/pagination'
import { PasswordInput } from '@welcome-ui/password-input'
import { Picker } from '@welcome-ui/picker'
import * as Popover from '@welcome-ui/popover'
import { Radio } from '@welcome-ui/radio'
import { RadioGroup } from '@welcome-ui/radio-group'
import { RadioTab } from '@welcome-ui/radio-tab'
import { Search } from '@welcome-ui/search'
import { Select } from '@welcome-ui/select'
import { Shape } from '@welcome-ui/shape'
import { Slider } from '@welcome-ui/slider'
import { Stack } from '@welcome-ui/stack'
import * as Swiper from '@welcome-ui/swiper'
import { Table } from '@welcome-ui/table'
import * as Tabs from '@welcome-ui/tabs'
import { Tag } from '@welcome-ui/tag'
import { Text } from '@welcome-ui/text'
import { Textarea } from '@welcome-ui/textarea'
import { TimePicker } from '@welcome-ui/time-picker'
import * as Toast from '@welcome-ui/toast'
import { Toggle } from '@welcome-ui/toggle'
import { Tooltip } from '@welcome-ui/tooltip'
import { useCopyText } from '@welcome-ui/utils.copy'

import * as constants from '../../../constants'
import { HookForm } from '../../HookForm'
import { IconsList } from '../../IconsList'

import * as S from './styles'
import { CopyButton } from './CopyButton'

const liveEditorStyle = {
  fontFamily: 'Menlo, monospace',
  fontSize: 14,
  margin: 0,
}

const transformCode = (code, row) => {
  if (code.startsWith('function') || code.startsWith('class')) return code
  return row ? `<CodeContentRow>${code}</CodeContentRow>` : `<CodeContent>${code}</CodeContent>`
}

export const Code = ({
  children,
  className,
  isCopyable = true,
  live = true,
  row,
  withCode = true,
}) => {
  const [editorOpen, setEditorOpen] = React.useState(false)
  const language = className && className.replace(/language-/, '')
  const [copy, copied] = useCopyText(children.trim(), 3000)
  const [editorCode, setEditorCode] = React.useState(children.trim())

  const toggleEditor = () => {
    setEditorOpen(!editorOpen)
  }

  const handleChange = code => {
    setEditorCode(code.trim())
  }

  React.useEffect(() => {
    setEditorCode(children.trim())
  }, [children])

  const liveProviderProps = {
    code: editorCode,
    theme,
    language,
    transformCode: () => transformCode(editorCode, row),
    scope: {
      ...Accordion,
      Alert,
      AspectRatio,
      Avatar,
      Badge,
      Box,
      Breadcrumb,
      Button,
      ButtonGroup,
      Card,
      Checkbox,
      CodeContent: S.CodeContent,
      CodeContentRow: S.CodeContentRow,
      constants,
      Controller,
      dateFR,
      DatePicker,
      DateTimePicker,
      ...Drawer,
      ...DropdownMenu,
      ...EmojiPicker,
      ...Emoji,
      Field,
      FieldGroup,
      FileDrop,
      ...Files,
      FileUpload,
      Flex,
      Grid,
      Hint,
      HookForm,
      Icon,
      ...IconFont,
      ...Icons,
      IconsList,
      InputText,
      Label,
      Link,
      Loader,
      MarkdownEditor,
      ...Modal,
      Pagination,
      PasswordInput,
      Picker,
      ...Popover,
      NextLink,
      Radio,
      RadioGroup,
      RadioTab,
      Search,
      Select,
      Shape,
      Slider,
      Stack,
      ...Swiper,
      Table,
      ...Tabs,
      Tag,
      Text,
      Textarea,
      TimePicker,
      ...Toast,
      Toggle,
      Tooltip,
      useCopyText,
      yup,
      yupResolver,
    },
  }

  if (live === true && language === 'jsx') {
    return (
      <LiveProvider {...liveProviderProps}>
        <Card
          className="codeEditor"
          display="flex"
          flexDirection="column"
          mt="md"
          overflow="visible"
        >
          <Box p="xl">
            <LivePreview />
          </Box>
          {withCode === true && (
            <S.ShowEditor>
              <Button
                border="none"
                h={25}
                onClick={toggleEditor}
                shape="circle"
                variant="tertiary"
                w={25}
              >
                <Icons.CodeIcon />
              </Button>
              {isCopyable && (
                <Button
                  border="none"
                  h={25}
                  ml="sm"
                  onClick={copy}
                  shape="circle"
                  variant="tertiary"
                  w={25}
                >
                  {copied ? <Icons.CheckIcon color="success-500" /> : <Icons.CopyIcon />}
                </Button>
              )}
            </S.ShowEditor>
          )}
        </Card>
        {editorOpen && withCode === true && (
          <S.LiveEditor>
            <S.LiveEditorContent
              isCopyable={isCopyable}
              onChange={handleChange}
              style={liveEditorStyle}
            />
            {isCopyable && <CopyButton copied={copied} copy={copy} />}
          </S.LiveEditor>
        )}
        <S.LiveError />
      </LiveProvider>
    )
  }

  return (
    <Box>
      <Box mt="lg" overflow="auto">
        <LiveProvider disabled {...liveProviderProps}>
          <S.LiveEditor>
            <S.LiveEditorContent isCopyable={isCopyable} style={liveEditorStyle} />
            {isCopyable && <CopyButton copied={copied} copy={copy} />}
          </S.LiveEditor>
        </LiveProvider>
      </Box>
    </Box>
  )
}
