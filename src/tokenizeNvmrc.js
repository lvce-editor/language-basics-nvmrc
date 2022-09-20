/**
 * @enum number
 */
export const TokenType = {
  Text: 1,
  Numeric: 2,
}

export const TokenMap = {
  [TokenType.Text]: 'Text',
  [TokenType.Numeric]: 'Numeric',
}

export const initialLineState = {
  state: 1,
  tokens: [],
}

export const hasArrayReturn = true

/**
 * @param {string} line
 */
export const tokenizeLine = (line) => {
  const tokens = [TokenType.Numeric, line.length]
  return {
    state: 1,
    tokens,
  }
}
