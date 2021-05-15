import { createSlice } from '@reduxjs/toolkit'

const NAME = 'field'

export const state = createSlice({
    name: NAME,
    initialState: {
        columns: 0,
        rows: 0,
        zoom: 1,
        cells: [],
        nextTokenId: 0,
        tokens: {},
        selectedTokenId: null
    },
    reducers: {

        // Payload: columns, rows
        setDimensions(state, action) {
            const { columns, rows } = action.payload

            state.columns = columns
            state.rows = rows

            for (let x = 0; x < columns; x++) {
                state.cells[x] = []

                for (let y = 0; y < rows; y++) {
                    state.cells[x][y] = null
                }
            }
        },

        // Payload: color, symbol, direction, x, y
        createToken(state, action) {
            const token = {
                id: state.nextTokenId++,
                ...action.payload
            }

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
        }

    }
})

export const getColumns = (state) => state[NAME].columns
export const getRows = (state) => state[NAME].rows
export const getZoom = (state) => state[NAME].zoom
export const getTokens = (state) => Object.values(state[NAME].tokens)
export const isTokenSelected = (state, tokenId) => state[NAME].selectedTokenId === tokenId

export const {
    setDimensions,
    createToken,
    moveToken,
    selectToken,
    unselectToken,
    toggleDirection
} = state.actions
