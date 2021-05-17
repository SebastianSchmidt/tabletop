import chroma from 'chroma-js'

const BLACK_TEXT = '#000000'
const WHITE_TEXT = '#FFFFFF'

export function getTextColor(color) {
    const blackText = chroma.contrast(BLACK_TEXT, color) >= chroma.contrast(WHITE_TEXT, color)
    return blackText ? BLACK_TEXT : WHITE_TEXT
}
