import * as React from 'react'

import { Text } from '@/Text'

const Example = () => {
  return (
    <>
      <Text>
        Honorificabilitudinitatibus califragilisticexpialidocious
        Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu
        グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉
      </Text>
      <Text wordBreak="break-all">
        Honorificabilitudinitatibus califragilisticexpialidocious
        Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu
        グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉
      </Text>
      <Text wordBreak="normal">
        This is a text with short words that does not require the word-break attribute
      </Text>
    </>
  )
}

export default Example
