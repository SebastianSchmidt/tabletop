import { configureStore } from '@reduxjs/toolkit'
import { state as field } from './field'
import { state as panel } from './panel'

export const store = configureStore({
    reducer: {
        [field.name]: field.reducer,
        [panel.name]: panel.reducer
    }
})
