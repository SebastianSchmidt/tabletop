import { useSelector } from '../app'
import { getSelectedTokenId } from '../view'
import { findTokenById } from './state'
import { Direction } from './types'
import { BaseToken } from './BaseToken'

type Props = {
    id: string
    size: number
    onTokenClick?: (id: string) => void
    onDirectionClick?: (id: string, direction: Direction) => void
    circleRef?: any
    containerClassName?: string
    circleClassName?: string
}

export function DynamicToken({
    id,
    size,
    onTokenClick,
    onDirectionClick,
    circleRef,
    containerClassName,
    circleClassName
}: Props) {
    // State
    const selected = useSelector(state => getSelectedTokenId(state) === id)
    const token = useSelector(state => findTokenById(state, id))
    const symbol = token ? token.symbol : ''
    const color = token ? token.color : '#cfd8dc'
    const direction = token ? token.direction : Direction.None

    return (
        <BaseToken
            id={id}
            size={size}
            color={color}
            symbol={symbol}
            direction={direction}
            selected={selected}
            onTokenClick={onTokenClick}
            onDirectionClick={onDirectionClick}
            circleRef={circleRef}
            containerClassName={containerClassName}
            circleClassName={circleClassName}
        />
    )
}
