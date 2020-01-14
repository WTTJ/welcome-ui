/* eslint-disable react/prop-types */
import React, { createRef, useRef, useState } from 'react'
import fr from 'date-fns/locale/fr'
import { Link as LinkDocz } from 'docz'
import { Form as FinalForm } from 'react-final-form'
import { LivePreview, LiveProvider } from 'react-live'

import * as Wui from '../src/index.js'
import { DefaultFileDropView, ITEMS } from '../scripts/tests'

import { IconsList } from './IconsList'
import { InlineCode } from './InlineCode'
import { Form } from './Form'
import { getTheme } from './CodeTheme'
import * as S from './CodeEditor.styled'

export const CodeEditor = ({ code, wrapper = true }) => {
  const [editorOpen, setEditorOpen] = useState(false)

  const transformCode = code => {
    if (code.startsWith('()') || code.startsWith('class')) return code
    return `<React.Fragment>${code}</React.Fragment>`
  }

  function toggleEditor() {
    setEditorOpen(!editorOpen)
  }

  return (
    <LiveProvider
      code={code}
      scope={{
        ...Wui,
        createRef,
        DefaultFileDropView,
        FinalForm,
        Form,
        fr,
        IconsList,
        LinkDocz,
        useRef,
        useState,
        ITEMS,
        InlineCode
      }}
      theme={getTheme()}
      transformCode={transformCode}
    >
      <S.LivePreview className="codeEditor">
        <Wui.Card.Body padding="xl" paddingBottom="lg">
          <S.LivePreviewContent wrapper={wrapper}>
            <LivePreview />
          </S.LivePreviewContent>
          {wrapper && (
            <S.ShowEditor>
              <Wui.Button onClick={toggleEditor} size="sm" variant="secondary">
                <Wui.Icon name="chevron" />
                <span>{editorOpen ? 'Hide' : 'Show'} editor</span>
              </Wui.Button>
            </S.ShowEditor>
          )}
        </Wui.Card.Body>
      </S.LivePreview>
      {wrapper && editorOpen && <S.LiveEditor />}
      <S.LiveError />
    </LiveProvider>
  )
}
