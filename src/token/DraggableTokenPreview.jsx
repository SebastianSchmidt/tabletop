import { Token } from './Token'

export function DraggableTokenPreview(props) {
    const { offset, ...tokenProps } = props
    const style = generateStyle(props)

    return (
        <div style={style}>
            <Token {...tokenProps} />
        </div>
    )
}

function generateStyle({ offset, size }) {
    const diff = (size / 20) * 3
    const x = offset.x - diff
    const y = offset.y - diff
    return { transform: `translate(${x}px, ${y}px)` }
}
