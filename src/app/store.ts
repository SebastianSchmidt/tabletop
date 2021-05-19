import { useSelector as useSelectorRaw, useDispatch as useDispatchRaw } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { NAME as tokens, reducer as tokensReducer } from '../token'
import { NAME as field, reducer as fieldReducer } from '../field'
import { NAME as view, reducer as viewReducer } from '../view'

export const store = configureStore({
    reducer: {
        [tokens]: tokensReducer,
        [field]: fieldReducer,
        [view]: viewReducer
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
