import { useCallback } from 'react'
import { useSelector, useDispatch } from '../app'
import { Direction, findTokenById, updateToken } from '../token'
import { SelectField } from '../forms'

const directions = [
    { label: '🡅 North', value: Direction.North },
    { label: '🡆 East', value: Direction.East },
    { label: '🡇 South', value: Direction.South },
    { label: '🡄 West', value: Direction.West },
    { label: 'None', value: Direction.None }
]

type Props = {
    id: string
}

export function TokenDirectionSelection({ id }: Props) {
    const direction = useSelector(state => {
        const direction = findTokenById(state, id)?.direction
        return direction ? direction : Direction.None
    })

    const dispatch = useDispatch()
    const onChange = useCallback((direction) => {
        dispatch(updateToken({
            id,
            direction
        }))
    }, [dispatch, id])

    return (
        <SelectField
            label="Direction"
            options={directions}
            value={direction}
            onChange={onChange}
        />
    )
}
