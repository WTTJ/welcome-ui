/* eslint-disable react/jsx-max-depth */
/* eslint-disable react/prop-types */
import * as React from 'react'
import { LivePreview, LiveProvider } from 'react-live'
import theme from 'prism-react-renderer/themes/nightOwl'
import NextLink from 'next/link'
import { Form as FinalForm } from 'react-final-form'
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
import * as DropdownMenu from '@welcome-ui/dropdown-menu'
import { Field } from '@welcome-ui/field'
import { FieldGroup } from '@welcome-ui/field-group'
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
import * as Modal from '@welcome-ui/modal'
import { Pagination } from '@welcome-ui/pagination'
import { Select } from '@welcome-ui/select'
import { Shape } from '@welcome-ui/shape'
import { Stack } from '@welcome-ui/stack'
import { Swiper } from '@welcome-ui/swiper'
import { Table } from '@welcome-ui/table'
import * as Tabs from '@welcome-ui/tabs'
import { Tag } from '@welcome-ui/tag'
import { Text } from '@welcome-ui/text'
import * as Toast from '@welcome-ui/toast'
import { Tooltip } from '@welcome-ui/tooltip'
import { useCopyText } from '@welcome-ui/utils.copy'

import { Form } from './Form'
import { IconsList } from './IconsList'
import * as S from './Code.styled'

const liveEditorStyle = {
  fontFamily: 'Menlo, monospace',
  fontSize: 14,
  margin: 0
}

const transformCode = (code, column) => {
  if (code.startsWith('function') || code.startsWith('class')) return code
  return `<Stack direction="${column ? 'column' : 'row'}" alignItems="${
    column ? undefined : 'center'
  }" spacing="md">${code}</Stack>`
}

export const Code = ({ children, className, column, live = true }) => {
  const [editorOpen, setEditorOpen] = React.useState(false)
  const language = className && className.replace(/language-/, '')

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
    transformCode: () => transformCode(editorCode, column),
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
      ConnectedField,
      ...DropdownMenu,
      Field,
      FieldGroup,
      FileUpload,
      FinalForm,
      Form,
      Group,
      Hint,
      Icon,
      ...IconFont,
      ...Icons,
      IconsList,
      InputText,
      Label,
      Link,
      Loader,
      ...Modal,
      Pagination,
      NextLink,
      Select,
      Shape,
      Stack,
      Swiper,
      Table,
      ...Tabs,
      Tag,
      Text,
      ...Toast,
      Tooltip,
      useCopyText,
      ...React
    }
  }

  if (live === true && language === 'jsx') {
    return (
      <LiveProvider {...liveProviderProps}>
        <S.LivePreview className="codeEditor">
          <Card.Body padding="xl" paddingBottom="lg">
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
          <S.LiveEditor onChange={handleChange} padding={20} style={liveEditorStyle} />
        )}
        <S.LiveError />
      </LiveProvider>
    )
  }

  return (
    <Box mt="lg" style={{ overflow: 'auto' }}>
      <LiveProvider disabled {...liveProviderProps}>
        <S.LiveEditor padding={20} style={liveEditorStyle} />
      </LiveProvider>
    </Box>
  )
}
