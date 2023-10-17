import { describe, expect, it } from 'vitest'

import { Emoji } from '../src/List'
import { formatEmojis } from '../src/utils'

describe('EmojiPicker utils', () => {
  describe('formatEmojis', () => {
    it('should format emoji list', () => {
      let emojis: unknown[] = []
      let formattedEmojis: unknown[] = []
      expect(formatEmojis(emojis as Emoji[])).toEqual(formattedEmojis)

      emojis = [
        {
          alias: 'test',
        },
      ]
      formattedEmojis = [
        [
          {
            alias: 'test',
            colIndex: 0,
            rowIndex: 0,
          },
        ],
      ]
      expect(formatEmojis(emojis as Emoji[])).toEqual(formattedEmojis)

      emojis = [
        {
          alias: 'foo',
          category: 'foo',
          test: 'ok',
        },
        {
          alias: 'bar',
          category: 'bar',
        },
      ]
      formattedEmojis = [
        ['foo'],
        [
          {
            alias: 'foo',
            category: 'foo',
            test: 'ok',
            colIndex: 0,
            rowIndex: 0,
          },
        ],
        ['bar'],
        [
          {
            alias: 'bar',
            category: 'bar',
            colIndex: 0,
            rowIndex: 1,
          },
        ],
      ]
      expect(formatEmojis(emojis as Emoji[])).toEqual(formattedEmojis)

      emojis = Array.from({ length: 20 }).map((_, i) => ({
        alias: i,
      }))
      formattedEmojis = [
        Array.from({ length: 8 }).map((_, i) => ({
          alias: i,
          colIndex: i,
          rowIndex: 0,
        })),
        Array.from({ length: 8 }).map((_, i) => ({
          alias: 8 + i,
          colIndex: i,
          rowIndex: 1,
        })),
        Array.from({ length: 4 }).map((_, i) => ({
          alias: 16 + i,
          colIndex: i,
          rowIndex: 2,
        })),
      ]
      expect(formatEmojis(emojis as Emoji[])).toEqual(formattedEmojis)
    })
  })
})
