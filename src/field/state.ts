import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app'
import { deleteToken } from '../token'
import { Cell } from './types'

export const MIN_DIMENSIONS = 1
export const MAX_DIMENSIONS = 100

interface State {
    columns: number
    rows: number,
    cells: Cell[][]
}

const initialState: State = {
    columns: 1,
    rows: 1,
    cells: [ [ createCell(0, 0) ] ]
}

export const slice = createSlice({
    name: 'field',
    initialState,
    reducers: {

        updateFieldDimensions(state, action: PayloadAction<{ columns: number, rows: number }>) {
            const columns = normalizeDimension(action.payload.columns)
            const rows = normalizeDimension(action.payload.rows)

            // Columns

            const columnsDiff = columns - state.columns

            if (columnsDiff > 0) {
                growColumns(state, columnsDiff)
            } else if (columnsDiff < 0) {
                shrinkColumns(state, Math.abs(columnsDiff))
            }

            state.columns = columns

            // Rows

            const rowsDiff = rows - state.rows

            if (rowsDiff > 0) {
                growRows(state, rowsDiff)
            } else if (rowsDiff < 0) {
                shrinkRows(state, Math.abs(rowsDiff))
            }

            state.rows = rows
        },

        moveToken(state, action: PayloadAction<{ id: string, x: number, y: number }>) {
            const { id, x, y } = action.payload
            removeToken(state, id)
            state.cells[x][y].tokenId = id
        }

    },
    extraReducers: (builder) => {

        builder.addCase(deleteToken, (state, action) => {
            const { id } = action.payload
            removeToken(state, id)
        })

    }
})

function normalizeDimension(value: number) {
    return Math.max(MIN_DIMENSIONS, Math.min(MAX_DIMENSIONS, value))
}

function createCell(x: number, y: number, tokenId?: string): Cell {
    return {
        x,
        y,
        tokenId
    }
}

function growColumns(state: State, increase: number) {
    const columnsStart = state.columns
    const columnsEnd = state.columns + increase

    for (let x = columnsStart; x < columnsEnd; x++) {
        state.cells[x] = []

        for (let y = 0; y < state.rows; y++) {
            state.cells[x][y] = createCell(x, y)
        }
    }
}

function removeToken(state: State, id: string) {
    for (let x = 0; x < state.columns; x++) {
        for (let y = 0; y < state.rows; y++) {
            const cell = state.cells[x][y]

            if (cell.tokenId === id) {
                cell.tokenId = undefined
                break
            }
        }
    }
}

function growRows(state: State, increase: number) {
    const rowsStart = state.rows
    const rowsEnd = state.rows + increase

    for (let x = 0; x < state.columns; x++) {
        for (let y = rowsStart; y < rowsEnd; y++) {
            state.cells[x][y] = createCell(x, y)
        }
    }
}

function shrinkColumns(state: State, decrease: number) {
    const columnsStart = state.columns - decrease
    const columnsEnd = state.columns

    for (let x = columnsStart; x < columnsEnd; x++) {
        for (let y = 0; y < state.rows; y++) {
            const tokenId = state.cells[x][y]
            // TODO Delete Token
            console.log('TODO Delete Token:', tokenId)
        }
    }

    state.cells.splice(columnsStart, decrease)
}

function shrinkRows(state: State, decrease: number) {
    const rowsStart = state.rows - decrease
    const rowsEnd = state.rows

    for (let x = 0; x < state.columns; x++) {
        for (let y = rowsStart; y < rowsEnd; y++) {
            const tokenId = state.cells[x][y]
            // TODO Delete Token
            console.log('TODO Delete Token:', tokenId)
        }

        state.cells[x].splice(rowsStart, decrease)
    }
}

export const getColumns = (state: RootState) => state.content.present.field.columns
export const getRows = (state: RootState) => state.content.present.field.rows
export const findCellByCoordinates = (state: RootState, x: number, y: number) => {
    const column = state.content.present.field.cells[x]
    return column ? column[y] : undefined
}

export const {
    updateFieldDimensions,
    moveToken
} = slice.actions

export const groupedFieldActions = [
    updateFieldDimensions.type
]
