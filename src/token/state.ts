import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app'
import { Token, TokenCreate, TokenUpdate, Direction } from './types'

interface State {
    ids: string[]
    entities: { [id: string]: Token }
}

const initialState: State = {
    ids: [],
    entities: {}
}

export const slice = createSlice({
    name: 'tokens',
    initialState,
    reducers: {

        createToken(state, action: PayloadAction<TokenCreate>) {
            const { id, color, symbol, direction } = action.payload
            const token = { id, color, symbol, direction }
            state.ids.push(id)
            state.entities[id] = token
        },

        updateToken(state, action: PayloadAction<TokenUpdate>) {
            const id = action.payload.id
            const token = state.entities[id]

            if (token) {
                state.entities[id] = {
                    ...token,
                    ...action.payload
                }
            }
        },

        toggleTokenDirection(state, action: PayloadAction<{ id: string, direction: Direction }>) {
            const { id, direction } = action.payload
            const token = state.entities[id]

            if (!token) {
                return
            }

            if (token.direction !== direction) {
                token.direction = direction
            } else {
                token.direction = Direction.None
            }
        },

        deleteToken(state, action: PayloadAction<{ id: string }>) {
            const { id } = action.payload
            const index = state.ids.indexOf(id)

            if (index > -1) {
                state.ids.splice(index, 1)
                delete state.entities[id]
            }
        }

    }
})

export const getTokenIds = (state: RootState) => state.content.present.tokens.ids
export const findTokenById = (state: RootState, id: string): Token | undefined => state.content.present.tokens.entities[id]

export const {
    createToken,
    updateToken,
    toggleTokenDirection,
    deleteToken
} = slice.actions
