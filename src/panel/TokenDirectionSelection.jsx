import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { SelectField } from '../forms'
import { getTokenById, setTokenDirection } from '../field'
import { Direction } from '../token'

const directions = [
    { label: '🡅 North', value: Direction.north },
    { label: '🡆 East', value: Direction.east },
    { label: '🡇 South', value: Direction.south },
    { label: '🡄 West', value: Direction.west },
    { label: 'None', value: '' }
]

export function TokenDirectionSelection({ id }) {
    const direction = useSelector(state => {
        const direction = getTokenById(state, id).direction
        return direction !== null ? direction : ''
    })

    const dispatch = useDispatch()
    const onChange = useCallback((direction) => {
        dispatch(setTokenDirection({
            id,
            direction: direction !== '' ? direction : null
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
