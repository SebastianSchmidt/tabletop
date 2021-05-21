import { XYCoord } from 'react-dnd'
import { DynamicToken } from './DynamicToken'

type Props = {
    id: string
    size: number
    offset: XYCoord
}

export function DraggableTokenPreview({
    id,
    size,
    offset
}: Props) {
    const style = generateStyle(size, offset)
    return (
        <div style={style}>
            <DynamicToken
                id={id}
                size={size}
            />
        </div>
    )
}

function generateStyle(size: number, offset: XYCoord) {
    const diff = (size / 20) * 3
    const x = offset.x - diff
    const y = offset.y - diff
    return { transform: `translate(${x}px, ${y}px)` }
}
