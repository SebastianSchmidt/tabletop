import { useSelector as useSelectorRaw, useDispatch as useDispatchRaw } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import undoable, { groupByActionTypes } from 'redux-undo'
import { slice as tokens } from '../token'
import { slice as field, groupedFieldActions } from '../field'
import { slice as view } from '../view'

const undoOptions = {
    limit: 100,
    groupBy: groupByActionTypes(groupedFieldActions)
}

export const store = configureStore({
    reducer: {
        content: undoable(combineReducers({
            [tokens.name]: tokens.reducer,
            [field.name]: field.reducer
        }), undoOptions),
        [view.name]: view.reducer
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
