import { createSlice } from '@reduxjs/toolkit'

const NAME = 'field'

export const MIN_DIMENSIONS = 1
export const MAX_DIMENSIONS = 100

function normalizeDimension(value) {
    return Math.max(MIN_DIMENSIONS, Math.min(MAX_DIMENSIONS, value))
}

export const state = createSlice({
    name: NAME,
    initialState: {
        columns: 1,
        rows: 1,
        zoom: 1,
        cells: [ [ null ] ],
        nextTokenId: 0,
        tokenIds: [],
        tokens: {},
        selectedTokenId: null
    },
    reducers: {

        // Payload: columns, rows
        setDimensions(state, action) {
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

        // Payload: color, symbol, direction, x, y
        createToken(state, action) {
            const token = {
                id: (state.nextTokenId++) + '',
                ...action.payload
            }

            state.tokenIds.push(token.id)
            state.tokens[token.id] = token
            state.cells[token.x][token.y] = token.id
        },

        // Payload: id, x, y
        moveToken(state, action) {
            const { id, x, y } = action.payload

            const token = state.tokens[id]

            state.cells[token.x][token.y] = null
            state.cells[x][y] = token.id

            token.x = x
            token.y = y
        },

        // Payload: id
        selectToken(state, action) {
            const { id } = action.payload
            state.selectedTokenId = id
        },

        unselectToken(state) {
            state.selectedTokenId = null
        },

        // Payload: id, direction
        toggleDirection(state, action) {
            const { id, direction } = action.payload

            const token = state.tokens[id]

            if (token.direction !== direction) {
                token.direction = direction
            } else {
                token.direction = null
            }
        },

        // Payload: id, symbol
        setTokenSymbol(state, action) {
            const { id, symbol } = action.payload
            const token = state.tokens[id]
            token.symbol = symbol
        }

    }
})

function growColumns(state, increase) {
    const columnsStart = state.columns
    const columnsEnd = state.columns + increase

    for (let x = columnsStart; x < columnsEnd; x++) {
        state.cells[x] = []

        for (let y = 0; y < state.rows; y++) {
            state.cells[x][y] = null
        }
    }
}

function growRows(state, increase) {
    const rowsStart = state.rows
    const rowsEnd = state.rows + increase

    for (let x = 0; x < state.columns; x++) {
        for (let y = rowsStart; y < rowsEnd; y++) {
            state.cells[x][y] = null
        }
    }
}

function shrinkColumns(state, decrease) {
    const columnsStart = state.columns - decrease
    const columnsEnd = state.columns

    for (let x = columnsStart; x < columnsEnd; x++) {
        for (let y = 0; y < state.rows; y++) {
            const tokenId = state.cells[x][y]

            if (tokenId) {
                state.tokenIds = state.tokenIds.filter(id => id !== tokenId)
                delete state.tokens[tokenId]
            }
        }
    }

    state.cells.splice(columnsStart, decrease)
}

function shrinkRows(state, decrease) {
    const rowsStart = state.rows - decrease
    const rowsEnd = state.rows

    for (let x = 0; x < state.columns; x++) {
        for (let y = rowsStart; y < rowsEnd; y++) {
            const tokenId = state.cells[x][y]

            if (tokenId) {
                state.tokenIds = state.tokenIds.filter(id => id !== tokenId)
                delete state.tokens[tokenId]
            }
        }

        state.cells[x].splice(rowsStart, decrease)
    }
}

export const getColumns = (state) => state[NAME].columns
export const getRows = (state) => state[NAME].rows
export const getZoom = (state) => state[NAME].zoom
export const getTokenIds = (state) => state[NAME].tokenIds
export const getTokenById = (state, id) => state[NAME].tokens[id]
export const isCellEmpty = (state, x, y) => state[NAME].cells[x][y] === null

export const isTokenSelected = (state, tokenId) => state[NAME].selectedTokenId === tokenId
export const getSelectedTokenId = (state) => state[NAME].selectedTokenId
export const getSelectedToken = (state) => {
    const id = state[NAME].selectedTokenId
    return id !== null ? state[NAME].tokens[id] : null
}

export const {
    setDimensions,
    createToken,
    moveToken,
    selectToken,
    unselectToken,
    toggleDirection,
    setTokenSymbol
} = state.actions
