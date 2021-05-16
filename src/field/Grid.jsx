import styles from './Grid.module.css'
import { GridItem } from './GridItem'

export function Grid({ columns, rows, cellSize, children }) {
    const style = generateGridStyle(columns, rows, cellSize)
    const cells = generateCells(columns, rows, cellSize)

    return (
        <div className={styles.grid} style={style}>
            {cells}
            {children}
        </div>
    )
}

function generateGridStyle(columns, rows, cellSize) {
    return {
        width: (columns * cellSize) + 'px',
        height: (rows * cellSize) + 'px'
    }
}

function generateCells(columns, rows, cellSize) {
    const cells = []

    for (let y = 0; y < rows; y++) {

        for (let x = 0; x < columns; x++) {

            cells.push(
                <GridItem
                    key={x + ';' + y}
                    x={x}
                    y={y}
                    columns={columns}
                    size={cellSize}
                />
            )

        }

    }

    return cells
}
