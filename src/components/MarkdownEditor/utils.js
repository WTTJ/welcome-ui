// Taken from https://github.com/sparksuite/simplemde-markdown-editor/blob/6abda7ab68cc20f4aca870eb243747951b90ab04/src/js/simplemde.js#L140
export const getCurrentToolsFromEditor = editor => {
  const pos = editor.getCursor('start')
  const token = editor.getTokenAt(pos)
  const line = editor.getLine(pos.line)

  const CODE_MIRROR_TYPES = {
    strong: 'bold',
    atom: 'quote',
    em: 'italic',
    quote: 'quote',
    strikethrough: 'strikethrough',
    'variable-2': /^\s*\d+\.\s/.test(line) ? 'ordered-list' : 'unordered-list',
    comment: 'code',
    link: 'link',
    tag: 'image',
    'header-1': 'heading-1',
    'header-2': 'heading-2'
  }

  if (!token.type) {
    return []
  }

  return token.type
    .split(' ')
    .map(type => CODE_MIRROR_TYPES[type])
    .filter(type => type)
}
