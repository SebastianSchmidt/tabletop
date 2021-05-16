import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NumberField } from '../forms'
import { getColumns, getRows, setDimensions, MIN_DIMENSIONS, MAX_DIMENSIONS } from '../field'
import { Panel } from './Panel'
import { PanelCategory } from './PanelCategory'

export function FieldPanel() {
    return (
        <Panel title="Field">
            <Dimensions />
        </Panel>
    )
}

// TODO Besseres Handling, wenn mehrstellige Zahlen eingegeben wird
//      (Bsp. 10: schrumpft erst auf 1, wächst dann auf 10).
function Dimensions() {
    const dispatch = useDispatch()
    const columns = useSelector(getColumns)
    const rows = useSelector(getRows)

    const columnsChanged = useCallback((columns) => {
        dispatch(setDimensions({
            columns,
            rows
        }))
    }, [dispatch, rows])

    const rowsChanged = useCallback((rows) => {
        dispatch(setDimensions({
            columns,
            rows
        }))
    }, [dispatch, columns])

    return (
        <PanelCategory title="Dimensions">
            <NumberField
                label="Columns"
                min={MIN_DIMENSIONS}
                max={MAX_DIMENSIONS}
                value={columns}
                onChange={columnsChanged}
            />
            <NumberField
                label="Rows"
                min={MIN_DIMENSIONS}
                max={MAX_DIMENSIONS}
                value={rows}
                onChange={rowsChanged}
            />
        </PanelCategory>
    )
}
