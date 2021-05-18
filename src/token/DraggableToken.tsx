import { useDrag } from 'react-dnd'
import classNames from 'classnames'
import { useDisablePreview } from '../dnd'
import { BaseToken } from './BaseToken'
import { Direction } from './types'
import styles from './DraggableToken.module.css'

type Props = {
    id: string
    size: number
    onTokenClick?: (id: string) => void
    onDirectionClick?: (id: string, direction: Direction) => void
}

export const TOKEN_DND_TYPE = 'Token'

export interface TokenDndItem {
    id: string
    size: number
}

export function DraggableToken(props: Props) {
    const { id, size } = props

    const item: TokenDndItem = { id, size }

    const [{ dragging }, drag, preview] = useDrag(() => ({
        type: TOKEN_DND_TYPE,
        item,
        collect: (monitor) => ({ dragging: !!monitor.isDragging() })
    }), [id, size])

    useDisablePreview(preview)

    const containerClassName = classNames({
        [styles.dragging]: dragging
    })

    return (
        <BaseToken
            {...props}
            circleRef={drag}
            containerClassName={containerClassName}
            circleClassName={styles.circle}
        />
    )
}
