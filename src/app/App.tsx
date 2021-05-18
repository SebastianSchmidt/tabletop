import { StrictMode } from 'react'
import { Provider } from 'react-redux'
import { DndProvider } from '../dnd'
import { Layout } from './Layout'
import { store } from './store'
import { updateFieldDimensions, moveToken } from '../field'
import { createToken, Direction } from '../token'

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

// TODO Remove example data:

store.dispatch(updateFieldDimensions({
    columns: 5,
    rows: 5
}))

store.dispatch(createToken({
    color: '#D5E8D4',
    symbol: 'T',
    direction: Direction.West
}))

store.dispatch(moveToken({
    id: '0',
    x: 3,
    y: 4
}))

store.dispatch(createToken({
    color: '#D5E8D4',
    symbol: 'E',
    direction: Direction.South
}))

store.dispatch(moveToken({
    id: '1',
    x: 1,
    y: 0
}))

store.dispatch(createToken({
    color: '#F8CECC',
    symbol: 'M',
    direction: Direction.South
}))

store.dispatch(moveToken({
    id: '2',
    x: 1,
    y: 1
}))

store.dispatch(createToken({
    color: '#F8CECC',
    symbol: 'M',
    direction: Direction.South
}))

store.dispatch(moveToken({
    id: '3',
    x: 2,
    y: 2
}))

store.dispatch(createToken({
    color: '#D5E8D4',
    symbol: 'Y',
    direction: Direction.West
}))

store.dispatch(moveToken({
    id: '4',
    x: 3,
    y: 2
}))

store.dispatch(createToken({
    color: '#D5E8D4',
    symbol: 'K',
    direction: Direction.North
}))

store.dispatch(moveToken({
    id: '5',
    x: 1,
    y: 3
}))

store.dispatch(createToken({
    color: '#647687',
    symbol: '',
    direction: Direction.None
}))

store.dispatch(moveToken({
    id: '6',
    x: 4,
    y: 0
}))

store.dispatch(createToken({
    color: '#647687',
    symbol: '',
    direction: Direction.None
}))

store.dispatch(moveToken({
    id: '7',
    x: 3,
    y: 1
}))

store.dispatch(createToken({
    color: '#647687',
    symbol: '',
    direction: Direction.None
}))

store.dispatch(moveToken({
    id: '8',
    x: 0,
    y: 2
}))

store.dispatch(createToken({
    color: '#647687',
    symbol: '',
    direction: Direction.None
}))

store.dispatch(moveToken({
    id: '9',
    x: 1,
    y: 4
}))
