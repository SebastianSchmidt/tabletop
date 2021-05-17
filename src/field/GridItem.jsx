import { useDrop } from 'react-dnd'
import classNames from 'classnames'
import styles from './GridItem.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { TOKEN_DND_TYPE } from '../token'
import { isCellEmpty, moveToken } from './state'

export function GridItem({
    x,
    y,
    columns,
    size
}) {
    const [{ isOver, canDrop }, drop] = useDroppable(x, y)

    const className = classNames(
        styles.cell,
        {
            [styles.firstRow]: y === 0,
            [styles.lastColumn]: x === columns - 1,
            [styles.droppable]: isOver && canDrop
        }
    )

    const style = generateStyle(size)

    return (
        <div
            ref={drop}
            className={className}
            style={style}
        />
    )
}

function useDroppable(x, y) {
    const dispatch = useDispatch()

    const empty = useSelector((state) => isCellEmpty(state, x, y))

    return useDrop(() => ({
        accept: TOKEN_DND_TYPE,
        canDrop: () => empty,
        drop: (item) => handleMovenToken(item, x, y, dispatch),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop()
        })
    }), [x, y, empty, dispatch])
}

function handleMovenToken(item, x, y, dispatch) {
    const { id } = item

    dispatch(moveToken({
        id,
        x,
        y
    }))
}

function generateStyle(cellSize) {
    const size = cellSize + 'px'
    return {
        width: size,
        height: size,
        lineHeight: size
    }
}
