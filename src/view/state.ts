import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app'
import { deleteToken } from '../token'

export const NAME = 'view'

interface State {
    panelVisible: boolean
    selectedTokenId?: string
}

const initialState: State = {
    panelVisible: true,
    selectedTokenId: undefined
}

const slice = createSlice({
    name: NAME,
    initialState,
    reducers: {

        togglePanel(state) {
            state.panelVisible = !state.panelVisible
        },

        selectToken(state, action: PayloadAction<{ id: string }>) {
            const { id } = action.payload
            state.selectedTokenId = id
        },

        deselectToken(state) {
            state.selectedTokenId = undefined
        }

    },
    extraReducers: (builder) => {

        builder.addCase(deleteToken, (state, action) => {
            const { id } = action.payload

            if (state.selectedTokenId === id) {
                state.selectedTokenId = undefined
            }
        })

    }
})

export const isPanelVisible = (state: RootState) => state[NAME].panelVisible
export const getSelectedTokenId = (state: RootState) => state[NAME].selectedTokenId
export const isTokenSelected = (state: RootState, id: string) => state[NAME].selectedTokenId === id

export const {
    togglePanel,
    selectToken,
    deselectToken
} = slice.actions

export const reducer = slice.reducer
