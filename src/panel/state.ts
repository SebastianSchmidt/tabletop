import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../app'

const NAME = 'panel'

interface State {
    visible: boolean
}

const initialState: State = {
    visible: true
}

export const state = createSlice({
    name: NAME,
    initialState,
    reducers: {

        togglePanel(state) {
            state.visible = !state.visible
        }

    }
})

export const isPanelVisible = (state: RootState) => state[NAME].visible

export const { togglePanel } = state.actions
