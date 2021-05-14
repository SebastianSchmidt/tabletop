import styles from './Field.module.css'
import { Grid } from './Grid'

const BASE_CELL_SIZE = 50

const COLUMNS = 30
const ROWS = 20
const ZOOM = 1

export function Field() {
    const cellSize = generateCellSize(ZOOM)

    return (
        <div className={styles.field}>
            <div className={styles.gridWrapper}>
                <Grid
                    columns={COLUMNS}
                    rows={ROWS}
                    cellSize={cellSize}
                />
            </div>
        </div>
    )
}

function generateCellSize(zoom) {
    return BASE_CELL_SIZE * zoom
}
