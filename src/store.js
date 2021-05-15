import { configureStore } from '@reduxjs/toolkit'
import { state as field } from './field'

export const store = configureStore({
    reducer: {
        [field.name]: field.reducer
    }
})
