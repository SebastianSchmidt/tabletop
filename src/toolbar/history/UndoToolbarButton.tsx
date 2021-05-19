import { ActionCreators } from 'redux-undo'
import { useSelector, useDispatch, RootState } from '../../app'
import { ToolbarButton } from '../ToolbarButton'

export function UndoToolbarButton() {
    const undoable = useSelector(isUndoable)
    const disabled = !undoable

    const dispatch = useDispatch()
    const onClick = () => dispatch(ActionCreators.undo())

    return (
        <ToolbarButton
            label="Undo"
            onClick={onClick}
            disabled={disabled}
        />
    )
}

function isUndoable(state: RootState): boolean {
    for (let value of Object.values(state)) {
        const sub = value as any

        if (sub && sub.past && sub.past.length > 0) {
            return true
        }
    }

    return false
}
