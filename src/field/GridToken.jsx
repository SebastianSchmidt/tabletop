import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Token } from '../token'
import { getTokenById, selectToken, isTokenSelected, toggleDirection } from './state'

export function GridToken(props) {
    const { id, size } = props

    const { color, symbol, direction, x, y } = useSelector((state) => getTokenById(state, id))
    const selected = useSelector((state) => isTokenSelected(state, id))

    const dispatch = useDispatch()

    const onTokenClick = useCallback((id) => {
        if (!selected) {
            dispatch(selectToken({ id }))
        }
    }, [dispatch, selected])

    const onDirectionClick = useCallback((id, direction) => {
        if (selected) {
            dispatch(toggleDirection({ id, direction }))
        } else {
            dispatch(selectToken({ id }))
        }
    }, [dispatch, selected])

    const containerStyle = generateContainerStyle(x, y, size)

    return (
        <div style={containerStyle}>
            <Token
                id={id}
                size={size}
                color={color}
                symbol={symbol}
                direction={direction}
                onTokenClick={onTokenClick}
                onDirectionClick={onDirectionClick}
                selected={selected}
                draggable={true}
            />
        </div>
    )
}

function generateContainerStyle(x, y, size) {
    const left = (x * size) + 'px'
    const top = (y * size) + 'px'

    const width = size + 'px'
    const height = size + 'px'

    return {
        position: 'absolute',
        left,
        top,
        width,
        height
    }
}
