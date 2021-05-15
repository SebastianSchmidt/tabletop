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
        tokens: {}
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
        }

    }
})

export const getColumns = (state) => state[NAME].columns
export const getRows = (state) => state[NAME].rows
export const getZoom = (state) => state[NAME].zoom
export const getTokens = (state) => Object.values(state[NAME].tokens)

export const { setDimensions, createToken, moveToken } = state.actions
