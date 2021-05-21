import { CSSProperties } from 'react'
import { useDrop } from 'react-dnd'
import { v4 as uuidv4 } from 'uuid'
import classNames from 'classnames'
import { useSelector, useDispatch, RootDispatch } from '../app'
import { createToken, TokenDndItem, TOKEN_DND_TYPE } from '../token'
import { NEW_TOKEN } from '../panel'
import { findCellByCoordinates, moveToken } from './state'
import { CellToken } from './CellToken'
import styles from './Cell.module.css'

type Props = {
    x: number,
    y: number,
    size: number,
    firstRow: boolean,
    lastColumn: boolean
}

export function Cell({
    x,
    y,
    size,
    firstRow,
    lastColumn
}: Props) {
    const cell = useSelector((state) => findCellByCoordinates(state, x, y))
    const tokenId = cell?.tokenId
    const empty = tokenId === undefined

    const [{ isOver, canDrop }, drop] = useDroppable(x, y, empty)

    const className = classNames(
        styles.cell,
        {
            [styles.firstRow]: firstRow,
            [styles.lastColumn]: lastColumn,
            [styles.droppable]: isOver && canDrop
        }
    )

    const style = generateStyle(size)

    return (
        <div
            ref={drop}
            className={className}
            style={style}
        >
            {tokenId ? <CellToken id={tokenId} size={size} /> : null}
        </div>
    )
}

function useDroppable(x: number, y: number, empty: boolean) {
    const dispatch = useDispatch()

    return useDrop(() => ({
        accept: TOKEN_DND_TYPE,
        canDrop: () => empty,
        drop: (item: TokenDndItem) => handleDrop(dispatch, x, y, item),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop()
        })
    }), [x, y, empty, dispatch])
}

function generateStyle(cellSize: number): CSSProperties {
    const size = cellSize + 'px'
    return {
        width: size,
        height: size
    }
}

function handleDrop(dispatch: RootDispatch, x: number, y: number, { id }: TokenDndItem) {
    if (id === NEW_TOKEN.id) {
        dispatch(createToken({
            x,
            y,
            id: uuidv4(),
            color: NEW_TOKEN.color,
            symbol: NEW_TOKEN.symbol,
            direction: NEW_TOKEN.direction
        }))
    } else {
        dispatch(moveToken({ x, y, id }))
    }
}
