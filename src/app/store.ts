import { useSelector as useSelectorRaw, useDispatch as useDispatchRaw } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { state as tokens } from '../token'
import { state as field } from '../field'
import { state as panel } from '../panel'

export const store = configureStore({
    reducer: {
        [tokens.name]: tokens.reducer,
        [field.name]: field.reducer,
        [panel.name]: panel.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type RootDispatch = typeof store.dispatch

export function useSelector<TState = RootState, TSelected = unknown>(
    selector: (state: TState) => TSelected,
    equalityFn?: (left: TSelected, right: TSelected) => boolean
) : TSelected {
    return useSelectorRaw(selector, equalityFn)
}

export const useDispatch = () => useDispatchRaw<RootDispatch>()
