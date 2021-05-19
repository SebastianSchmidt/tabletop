import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app'
import { Token, TokenCreate, TokenUpdate, Direction } from './types'

const NAME = 'tokens'

interface State {
    nextTokenId: number
    ids: string[]
    entities: { [id: string]: Token }
    selectedTokenId?: string
}

const initialState: State = {
    nextTokenId: 0,
    ids: [],
    entities: {},
    selectedTokenId: undefined,
}

export const state = createSlice({
    name: NAME,
    initialState,
    reducers: {

        createToken(state, action: PayloadAction<TokenCreate>) {
            const id = (state.nextTokenId++) + ''
            const token = { id, ...action.payload }
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

            if (state.selectedTokenId === id) {
                state.selectedTokenId = undefined
            }
        },

        selectToken(state, action: PayloadAction<{ id: string }>) {
            const { id } = action.payload

            if (state.entities[id]) {
                state.selectedTokenId = id
            }
        },

        deselectToken(state) {
            state.selectedTokenId = undefined
        }

    }
})

export const getTokenIds = (state: RootState) => state[NAME].ids
export const findTokenById = (state: RootState, id: string): Token | undefined => state[NAME].entities[id]
export const getSelectedTokenId = (state: RootState) => state[NAME].selectedTokenId
export const isTokenSelected = (state: RootState, id: string) => state[NAME].selectedTokenId === id

export const {
    createToken,
    updateToken,
    toggleTokenDirection,
    deleteToken,
    selectToken,
    deselectToken
} = state.actions
