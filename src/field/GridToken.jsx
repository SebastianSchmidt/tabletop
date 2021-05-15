import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Token } from '../token'
import { selectToken, isTokenSelected, toggleDirection } from './state'

export function GridToken(props) {
    const { id } = props

    const dispatch = useDispatch()

    const selectedCallback = useCallback((state) => isTokenSelected(state, id), [id])
    const selected = useSelector(selectedCallback)
    const { x, y, ...tokenProps } = props

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

    const containerStyle = generateContainerStyle(props)

    return (
        <div style={containerStyle}>
            <Token
                onTokenClick={onTokenClick}
                onDirectionClick={onDirectionClick}
                selected={selected}
                {...tokenProps}
            />
        </div>
    )
}

function generateContainerStyle({ x, y, size }) {
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
