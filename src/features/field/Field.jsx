import styles from './Field.module.css'
import { Grid } from './Grid'
import { GridToken } from './GridToken'
import { Direction } from '../token'

const BASE_CELL_SIZE = 100

const COLUMNS = 20
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
                >
                    <GridToken
                        symbol="😎"
                        direction={Direction.east}
                        size={cellSize}
                        x="4"
                        y="2"
                    />
                </Grid>
            </div>
        </div>
    )
}

function generateCellSize(zoom) {
    return BASE_CELL_SIZE * zoom
}
