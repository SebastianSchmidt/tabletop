import { useCallback } from 'react'
import { useSelector, useDispatch } from '../../app'
import { deleteToken } from '../../token'
import { getSelectedTokenId } from '../../view'
import { ToolbarButton } from '../ToolbarButton'

export function DeleteTokenToolbarButton() {
    const tokenId = useSelector((state) => getSelectedTokenId(state))
    const disabled = !tokenId

    const dispatch = useDispatch()
    const onClick = useCallback(() => {
        if (tokenId) {
            dispatch(deleteToken({
                id: tokenId
            }))
        }
    }, [tokenId, dispatch])

    return (
        <ToolbarButton
            label="Delete"
            disabled={disabled}
            onClick={onClick}
        />
    )
}
