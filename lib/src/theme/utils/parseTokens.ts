export type FlatTokens = Record<string, string>

export interface TokensStructure {
  [key: string]: TokenNode
}

type TokenNode = string | TokenValue | TokenWithType | { [key: string]: TokenNode }

interface TokenValue {
  value: string
}

type TokenWithType = TokensStructure & {
  type: string
}

const getValue = (tokens: TokensStructure, path: string): TokenNode | undefined =>
  path.split('.').reduce((acc, key) => acc?.[key], tokens)

const recurseUntilValue = (
  acc: FlatTokens,
  key: string,
  value: TokenNode,
  tokens: TokensStructure
): FlatTokens => {
  if (key === 'type') return acc

  const hasValue = (node: TokenNode): node is TokenValue => {
    return typeof node === 'object' && node !== null && 'value' in node
  }

  if (hasValue(value)) {
    const finalValue = value.value
    const regex = new RegExp(/{(?<color>[^}]+)}/gm)

    if (finalValue.match(regex)) {
      let processedValue = finalValue
      for (const colorMatches of finalValue.matchAll(regex)) {
        const { color } = colorMatches.groups!
        const tokenNode = getValue(tokens, color)
        if (tokenNode && hasValue(tokenNode)) {
          processedValue = processedValue.replace(`{${color}}`, tokenNode.value)
        }
      }
      acc[key] = processedValue
    } else {
      acc[key] = finalValue
    }
    return acc
  }

  if (typeof value === 'object' && value !== null) {
    for (const [k, v] of Object.entries(value)) {
      if (k === 'type') continue
      const nestedKey = `${key}-${k}`
      recurseUntilValue(acc, nestedKey, v, tokens)
    }
  }

  return acc
}

export const parseTokens = (tokens: TokensStructure): FlatTokens =>
  Object.entries(tokens).reduce((acc: FlatTokens, [key, value]) => {
    recurseUntilValue(acc, key, value, tokens)
    return acc
  }, {})
