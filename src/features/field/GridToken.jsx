import { Token } from '../token'

export function GridToken(props) {
    const containerStyle = generateContainerStyle(props)

    const { x, y, ...tokenProps } = props

    return (
        <div style={containerStyle}>
            <Token {...tokenProps} />
        </div>
    )
}

function generateContainerStyle({ x, y, size }) {
    const left = (x * size) + 'px'
    const top = (y * size) + 'px'

    const width = size + 'px'
    const height = size + 'px'

    return {
        position: 'absolute',
        left,
        top,
        width,
        height
    }
}
