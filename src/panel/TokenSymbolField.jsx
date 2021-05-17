import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { TextField } from '../forms'
import { getTokenById, setTokenSymbol } from '../field'

export function TokenSymbolField({ id }) {
    const symbol = useSelector(state => {
        const symbol = getTokenById(state, id).symbol
        return symbol !== null ? symbol : ''
    })

    const dispatch = useDispatch()
    const onChange = useCallback((symbol) => {
        dispatch(setTokenSymbol({
            id,
            symbol
        }))
    }, [dispatch, id])

    const onFocus = (event) => event.target.select()

    return (
        <TextField
            label="Symbol"
            max="1"
            value={symbol}
            onChange={onChange}
            onFocus={onFocus}
        />
    )
}
