import { useCallback } from 'react'
import range from 'lodash.range'
import { useSelector, useDispatch } from '../app'
import { SelectField } from '../forms'
import { getColumns, getRows, updateFieldDimensions, MIN_DIMENSIONS, MAX_DIMENSIONS } from '../field'
import { Panel } from './Panel'
import { PanelCategory } from './PanelCategory'

export function FieldPanel() {
    return (
        <Panel title="Field">
            <Dimensions />
        </Panel>
    )
}

function Dimensions() {
    const dispatch = useDispatch()
    const columns = useSelector(getColumns)
    const rows = useSelector(getRows)

    const columnsChanged = useCallback((columns) => {
        dispatch(updateFieldDimensions({
            columns,
            rows
        }))
    }, [dispatch, rows])

    const rowsChanged = useCallback((rows) => {
        dispatch(updateFieldDimensions({
            columns,
            rows
        }))
    }, [dispatch, columns])

    return (
        <PanelCategory>
            <DimensionSelect
                label="Columns"
                value={columns}
                onChange={columnsChanged}
            />
            <DimensionSelect
                label="Rows"
                value={rows}
                onChange={rowsChanged}
            />
        </PanelCategory>
    )
}

type DimensionSelectProps = {
    label: string,
    value: number,
    onChange: (value: string) => void
}

function DimensionSelect({
    label, 
    value,
    onChange
}: DimensionSelectProps) {
    const options = range(MIN_DIMENSIONS, MAX_DIMENSIONS + 1)
    return (
        <SelectField
            label={label}
            options={options}
            value={value + ''}
            onChange={onChange}
        />
    )
}
