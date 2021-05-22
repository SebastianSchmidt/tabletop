import { StrictMode } from 'react'
import { Provider } from 'react-redux'
import { ActionCreators } from 'redux-undo'
import { v4 as uuidv4 } from 'uuid'
import { DndProvider } from '../dnd'
import { updateFieldDimensions } from '../field'
import { createToken, Direction } from '../token'
import { Layout } from './Layout'
import { store } from './store'

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
    columns: 8,
    rows: 8
}))

// Test data
if (window.location.search.substr(1) === 'ama') {
    store.dispatch(createToken({
        id: uuidv4(),
        x: 2,
        y: 6,
        color: '#d5e8d4',
        symbol: 'K',
        direction: Direction.North
    }))
    store.dispatch(createToken({
        id: uuidv4(),
        x: 3,
        y: 6,
        color: '#d5e8d4',
        symbol: 'T',
        direction: Direction.North
    }))
    store.dispatch(createToken({
        id: uuidv4(),
        x: 4,
        y: 6,
        color: '#d5e8d4',
        symbol: 'E',
        direction: Direction.North
    }))
    store.dispatch(createToken({
        id: uuidv4(),
        x: 5,
        y: 6,
        color: '#d5e8d4',
        symbol: 'Y',
        direction: Direction.North
    }))

    store.dispatch(createToken({
        id: uuidv4(),
        x: 1,
        y: 0,
        color: '#647687',
        symbol: '',
        direction: Direction.None
    }))
    store.dispatch(createToken({
        id: uuidv4(),
        x: 2,
        y: 0,
        color: '#647687',
        symbol: '',
        direction: Direction.None
    }))
    store.dispatch(createToken({
        id: uuidv4(),
        x: 3,
        y: 0,
        color: '#647687',
        symbol: '',
        direction: Direction.None
    }))
    store.dispatch(createToken({
        id: uuidv4(),
        x: 4,
        y: 0,
        color: '#647687',
        symbol: '',
        direction: Direction.None
    }))
    store.dispatch(createToken({
        id: uuidv4(),
        x: 5,
        y: 0,
        color: '#647687',
        symbol: '',
        direction: Direction.None
    }))
    store.dispatch(createToken({
        id: uuidv4(),
        x: 6,
        y: 0,
        color: '#647687',
        symbol: '',
        direction: Direction.None
    }))
}

store.dispatch(ActionCreators.clearHistory())
