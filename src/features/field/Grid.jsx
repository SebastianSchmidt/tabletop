import styles from './Grid.module.css'

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
    const style = generateCellStyle(cellSize)

    const cells = []

    for (let y = 0; y < rows; y++) {

        for (let x = 0; x < columns; x++) {

            const classNames = styles.cell
                + (y === 0 ? ' ' + styles.firstRow : '')
                + (x === columns - 1 ? ' ' + styles.lastColumn : '')

            cells.push(
                <div
                    key={x + ';' + y}
                    className={classNames}
                    style={style}
                >{x + ';' + y}</div>
            )

        }

    }

    return cells
}

function generateCellStyle(cellSize) {
    const size = cellSize + 'px'
    return {
        width: size,
        height: size,
        lineHeight: size
    }
}
