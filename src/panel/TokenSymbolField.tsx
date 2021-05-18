import { useCallback, FocusEvent } from 'react'
import { useSelector, useDispatch } from '../app'
import { findTokenById, updateToken } from '../token'
import { TextField } from '../forms'

type Props = {
    id: string
}

export function TokenSymbolField({ id }: Props) {
    const symbol = useSelector(state => {
        const symbol = findTokenById(state, id)?.symbol
        return symbol ? symbol : ''
    })

    const dispatch = useDispatch()
    const onChange = useCallback((symbol) => {
        dispatch(updateToken({
            id,
            symbol
        }))
    }, [dispatch, id])

    const onFocus = (event: FocusEvent<any>) => event.target.select()

    return (
        <TextField
            label="Symbol"
            max={1}
            value={symbol}
            onChange={onChange}
            onFocus={onFocus}
        />
    )
}
