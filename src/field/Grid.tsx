import styles from './Grid.module.css'
import { useSelector } from '../app'
import { getColumns, getRows } from './state'
import { Cell } from './Cell'

type Props = {
    cellSize: number
}

export function Grid({ cellSize }: Props) {
    const columns = useSelector(getColumns)
    const rows = useSelector(getRows)

    const style = generateGridStyle(columns, rows, cellSize)
    const cells = generateCells(columns, rows, cellSize)

    return (
        <div className={styles.grid} style={style}>
            {cells}
        </div>
    )
}

function generateGridStyle(columns: number, rows: number, cellSize: number) {
    return {
        width: (columns * cellSize) + 'px',
        height: (rows * cellSize) + 'px'
    }
}

function generateCells(columns: number, rows: number, cellSize: number) {
    const cells = []

    for (let y = 0; y < rows; y++) {
        const firstRow = y === 0

        for (let x = 0; x < columns; x++) {
            const lastColumn = x === columns - 1

            cells.push(
                <Cell
                    key={x + ';' + y}
                    x={x}
                    y={y}
                    size={cellSize}
                    firstRow={firstRow}
                    lastColumn={lastColumn}
                />
            )
        }
    }

    return cells
}
