import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useInput } from '../shared/use-input'
import { getColumns, getRows, setDimensions } from '../field'
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

    const columnsChanged = useCallback((value) => {
        const columns = parseInt(value)
        if (!isNaN(columns)) {
            dispatch(setDimensions({
                columns,
                rows
            }))
        }
    }, [dispatch, rows])

    const rowsChanged = useCallback((value) => {
        const rows = parseInt(value)
        if (!isNaN(rows)) {
            dispatch(setDimensions({
                columns,
                rows
            }))
        }
    }, [dispatch, columns])

    const [columnsBind] = useInput(columns, columnsChanged)
    const [rowsBind] = useInput(rows, rowsChanged)

    return (
        <PanelCategory title="Dimensions">
            <div>
                <label>Spalten</label>
                <input
                    type="number"
                    min="1"
                    {...columnsBind}
                />
            </div>
            <div>
                <label>Reihen</label>
                <input
                    type="number"
                    min="1"
                    {...rowsBind}
                />
            </div>
        </PanelCategory>
    )
}
