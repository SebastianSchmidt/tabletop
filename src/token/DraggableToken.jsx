import { useDrag } from 'react-dnd'
import classNames from 'classnames'
import { useDisablePreview } from '../dnd'
import { Token } from './Token'
import styles from './DraggableToken.module.css'

export const TOKEN_DND_TYPE = 'Token'

export function DraggableToken(props) {
    const {
        id,
        size,
        color,
        symbol,
        direction
    } = props

    const [{ isDragging }, drag, preview] = useDrag(() => ({
        type: TOKEN_DND_TYPE,
        // TODO Nur Token-ID übertragen (global Token-State):
        item: {
            id,
            size,
            color,
            symbol,
            direction
        },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }), [id, size, color, symbol, direction])

    useDisablePreview(preview)

    const containerClassName = classNames({
        [styles.dragging]: isDragging
    })

    return (
        <Token
            {...props}
            circleRef={drag}
            containerClassName={containerClassName}
            circleClassName={styles.circle}
        />
    )
}
