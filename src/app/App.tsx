import { StrictMode } from 'react'
import { Provider } from 'react-redux'
import { ActionCreators } from 'redux-undo'
import { DndProvider } from '../dnd'
import { Layout } from './Layout'
import { store } from './store'
import { updateFieldDimensions } from '../field'

export function App() {
    return (
        <StrictMode>
            <Provider store={store}>
                <DndProvider>
                    <Layout />
                </DndProvider>
            </Provider>
        </StrictMode>
    )
}

store.dispatch(updateFieldDimensions({
    columns: 5,
    rows: 5
}))

store.dispatch(ActionCreators.clearHistory())
