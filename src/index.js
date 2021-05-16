import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import App from './app/App'
import * as serviceWorker from './serviceWorker'
import './base.css'

import { store } from './store'
import { Direction } from './token'
import { setDimensions, createToken, moveToken } from './field'

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <DndProvider backend={HTML5Backend}>
                <App />
            </DndProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

store.dispatch(setDimensions({
    columns: 5,
    rows: 5
}))

store.dispatch(createToken({
    color: '#D5E8D4',
    symbol: 'T',
    direction: Direction.west,
    x: 4,
    y: 4
}))

store.dispatch(createToken({
    color: '#D5E8D4',
    symbol: 'E',
    direction: Direction.south,
    x: 1,
    y: 0
}))

store.dispatch(createToken({
    color: '#F8CECC',
    symbol: 'M',
    direction: Direction.south,
    x: 1,
    y: 1
}))

store.dispatch(createToken({
    color: '#F8CECC',
    symbol: 'M',
    direction: Direction.south,
    x: 2,
    y: 2
}))

store.dispatch(createToken({
    color: '#D5E8D4',
    symbol: 'Y',
    direction: Direction.west,
    x: 3,
    y: 2
}))

store.dispatch(createToken({
    color: '#D5E8D4',
    symbol: 'K',
    direction: Direction.north,
    x: 1,
    y: 3
}))

store.dispatch(createToken({
    color: '#647687',
    symbol: '',
    direction: null,
    x: 4,
    y: 0
}))

store.dispatch(createToken({
    color: '#647687',
    symbol: '',
    direction: null,
    x: 3,
    y: 1
}))

store.dispatch(createToken({
    color: '#647687',
    symbol: '',
    direction: null,
    x: 0,
    y: 2
}))

store.dispatch(createToken({
    color: '#647687',
    symbol: '',
    direction: null,
    x: 1,
    y: 4
}))

store.dispatch(moveToken({
    id: '0',
    x: 3,
    y: 4
}))
