import { useDrag } from 'react-dnd'
import classNames from 'classnames'
import { useDisablePreview } from '../dnd'
import { BaseToken, Direction, TOKEN_DND_TYPE, TokenDndItem } from '../token'
import { Panel } from './Panel'
import styles from './NewToken.module.css'

export const NEW_TOKEN = {
    id: '',
    color: '#cfd8dc',
    symbol: '',
    direction: Direction.None
}

const item: TokenDndItem = {
    id: NEW_TOKEN.id,
    size: 100
}

export function NewToken() {
    const [{ dragging }, drag, preview] = useDrag(() => ({
        type: TOKEN_DND_TYPE,
        item,
        collect: (monitor) => ({ dragging: !!monitor.isDragging() })
    }))

    useDisablePreview(preview)

    const className = classNames(
        styles.token,
        { [styles.dragging]: dragging }
    )

    return (
        <Panel title="Neuer Token" className={styles.panel}>
            <div className={styles.tokenWrapper}>
                <BaseToken
                    id={item.id}
                    size={item.size}
                    color={NEW_TOKEN.color}
                    symbol=""
                    direction={Direction.None}
                    selected={false}
                    circleRef={drag}
                    circleClassName={className}
                />
            </div>
        </Panel>
    )
}
