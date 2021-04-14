/* eslint-disable react/no-multi-comp */
/* eslint-disable react/jsx-max-depth */
/* eslint-disable react/prop-types */
import * as React from 'react'
import { LivePreview, LiveProvider } from 'react-live'
import theme from 'prism-react-renderer/themes/nightOwl'
import NextLink from 'next/link'
import { Form as FinalForm } from 'react-final-form'
import dateFR from 'date-fns/locale/fr'
import * as yup from 'yup'
import { Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
// Welcome UI
import { Accordion } from '@welcome-ui/accordion'
import { Alert } from '@welcome-ui/alert'
import { Avatar } from '@welcome-ui/avatar'
import { Badge } from '@welcome-ui/badge'
import { Box } from '@welcome-ui/box'
import { Breadcrumb } from '@welcome-ui/breadcrumb'
import { Button } from '@welcome-ui/button'
import { Card } from '@welcome-ui/card'
import { Checkbox } from '@welcome-ui/checkbox'
import { ConnectedField } from '@welcome-ui/connected-field'
import { DatePicker } from '@welcome-ui/date-picker'
import { DateTimePicker } from '@welcome-ui/date-time-picker'
import * as DropdownMenu from '@welcome-ui/dropdown-menu'
import { Field } from '@welcome-ui/field'
import { FieldGroup } from '@welcome-ui/field-group'
import { FileDrop } from '@welcome-ui/file-drop'
import * as Files from '@welcome-ui/files'
import { FileUpload } from '@welcome-ui/file-upload'
import { Group } from '@welcome-ui/group'
import { Hint } from '@welcome-ui/hint'
import { Icon } from '@welcome-ui/icon'
import * as Icons from '@welcome-ui/icons'
import * as IconFont from '@welcome-ui/icons.font'
import { InputText } from '@welcome-ui/input-text'
import { Label } from '@welcome-ui/label'
import { Link } from '@welcome-ui/link'
import { Loader } from '@welcome-ui/loader'
import { MarkdownEditor } from '@welcome-ui/markdown-editor'
import * as Modal from '@welcome-ui/modal'
import { Pagination } from '@welcome-ui/pagination'
import { Picker } from '@welcome-ui/picker'
import * as Popover from '@welcome-ui/popover'
import { Radio } from '@welcome-ui/radio'
import { RadioGroup } from '@welcome-ui/radio-group'
import { RadioTab } from '@welcome-ui/radio-tab'
import { Search } from '@welcome-ui/search'
import { Select } from '@welcome-ui/select'
import { Shape } from '@welcome-ui/shape'
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
import * as Drawer from '@welcome-ui/drawer'
import * as EmojiPicker from '@welcome-ui/emoji-picker'
import * as Emoji from '@welcome-ui/emoji'

import * as constants from '../constants'

import { Form } from './Form'
import { HookForm } from './HookForm'
import { IconsList } from './IconsList'
import * as S from './Code.styled'

const liveEditorStyle = {
  fontFamily: 'Menlo, monospace',
  fontSize: 14,
  margin: 0
}

const transformCode = (code, row) => {
  if (code.startsWith('function') || code.startsWith('class')) return code
  return row ? `<CodeContentRow>${code}</CodeContentRow>` : `<CodeContent>${code}</CodeContent>`
}

const CopyButton = ({ copied, copy }) => {
  return (
    <Button
      mr="lg"
      mt="lg"
      onClick={copy}
      position="absolute"
      right={0}
      size="xs"
      top={0}
      variant={copied ? 'quaternary' : 'tertiary-negative'}
    >
      {copied ? 'Copied!' : 'Copy'}
    </Button>
  )
}

export const Code = ({ children, className, isCopyable = true, live = true, row }) => {
  const [editorOpen, setEditorOpen] = React.useState(false)
  const language = className && className.replace(/language-/, '')
  const [copy, copied] = useCopyText(children.trim(), 5000)

  const [editorCode, setEditorCode] = React.useState(children.trim())

  function toggleEditor() {
    setEditorOpen(!editorOpen)
  }

  function handleChange(code) {
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
      Accordion,
      Alert,
      Avatar,
      Badge,
      Box,
      Breadcrumb,
      Button,
      Card,
      Checkbox,
      CodeContent: S.CodeContent,
      CodeContentRow: S.CodeContentRow,
      ConnectedField,
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
      FinalForm,
      Form,
      Group,
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
      Picker,
      ...Popover,
      NextLink,
      Radio,
      RadioGroup,
      RadioTab,
      Search,
      Select,
      Shape,
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
      ...React,
      yup,
      yupResolver
    }
  }

  if (live === true && language === 'jsx') {
    return (
      <LiveProvider {...liveProviderProps}>
        <S.LivePreview className="codeEditor">
          <Card.Body color="dark.900" padding="xl" paddingBottom="lg">
            <LivePreview />
            <S.ShowEditor>
              <Button onClick={toggleEditor} size="sm" variant="secondary">
                <Icon name="chevron" />
                <span>{editorOpen ? 'Hide' : 'Show'} editor</span>
              </Button>
            </S.ShowEditor>
          </Card.Body>
        </S.LivePreview>
        {editorOpen && (
          <S.LiveEditor>
            <S.LiveEditorContent onChange={handleChange} padding={20} style={liveEditorStyle} />
            {isCopyable && <CopyButton copied={copied} copy={copy} />}
          </S.LiveEditor>
        )}
        <S.LiveError />
      </LiveProvider>
    )
  }

  return (
    <Box mt="lg" overflow="auto">
      <LiveProvider disabled {...liveProviderProps}>
        <S.LiveEditor>
          <S.LiveEditorContent padding={20} style={liveEditorStyle} />
          {isCopyable && <CopyButton copied={copied} copy={copy} />}
        </S.LiveEditor>
      </LiveProvider>
    </Box>
  )
}
