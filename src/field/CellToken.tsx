import { CSSProperties, useCallback } from 'react'
import { useSelector, useDispatch, RootDispatch } from '../app'
import { DraggableToken, toggleTokenDirection } from '../token'
import { selectToken, deselectToken, isTokenSelected } from '../view'

type Props = {
    id: string
    size: number
}

export function CellToken({
    id,
    size
}: Props) {
    const selected = useSelector((state) => isTokenSelected(state, id))

    const dispatch = useDispatch()
    const onTokenClick = useTokenClickHandler(selected, dispatch)
    const onDirectionClick = useDirectionClickHandler(selected, dispatch)

    const style = generateContainerStyle(size)

    return (
        <div style={style}>
            <DraggableToken
                id={id}
                size={size}
                onTokenClick={onTokenClick}
                onDirectionClick={onDirectionClick}
            />
        </div>
    )
}

function useTokenClickHandler(selected: boolean, dispatch: RootDispatch) {
    return useCallback((id) => {
        if (!selected) {
            dispatch(selectToken({ id }))
        } else {
            dispatch(deselectToken())
        }
    }, [dispatch, selected])
}

function useDirectionClickHandler(selected: boolean, dispatch: RootDispatch) {
    return useCallback((id, direction) => {
        if (selected) {
            dispatch(toggleTokenDirection({ id, direction }))
        } else {
            dispatch(selectToken({ id }))
        }
    }, [selected, dispatch])
}

function generateContainerStyle(size: number): CSSProperties {
    const width = size + 'px'
    const height = size + 'px'

    return {
        position: 'absolute',
        left: '-1px',
        top: '-1px',
        width,
        height
    }
}
