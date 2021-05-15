import { useSelector, useDispatch } from 'react-redux'
import { Grid } from './Grid'
import { GridToken } from './GridToken'
import { getColumns, getRows, getZoom, getTokens, unselectToken } from './state'
import styles from './Field.module.css'

const BASE_CELL_SIZE = 100

export function Field() {
    const columns = useSelector(getColumns)
    const rows = useSelector(getRows)
    const zoom = useSelector(getZoom)
    const tokens = useSelector(getTokens)

    const cellSize = generateCellSize(zoom)
    const gridTokens = generateGridTokens(tokens, cellSize)

    const dispatch = useDispatch()
    const onUnselectToken = () => dispatch(unselectToken())

    return (
        <div className={styles.field}>
            <div
                className={styles.gridWrapper}
                onClick={onUnselectToken}
            >
                <Grid
                    columns={columns}
                    rows={rows}
                    cellSize={cellSize}
                >
                    {gridTokens}
                </Grid>
            </div>
        </div>
    )
}

function generateCellSize(zoom) {
    return BASE_CELL_SIZE * zoom
}

function generateGridTokens(tokens, cellSize) {
    return tokens.map(token =>
        <GridToken
            key={token.id}
            id={token.id}
            size={cellSize}
            color={token.color}
            symbol={token.symbol}
            direction={token.direction}
            x={token.x}
            y={token.y}
        />
    )
}
