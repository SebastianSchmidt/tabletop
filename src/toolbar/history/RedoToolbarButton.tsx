import { ActionCreators } from 'redux-undo'
import { useSelector, useDispatch, RootState } from '../../app'
import { ToolbarButton } from '../ToolbarButton'

export function RedoToolbarButton() {
    const redoable = useSelector(isRedoable)
    const disabled = !redoable

    const dispatch = useDispatch()
    const onClick = () => dispatch(ActionCreators.redo())

    return (
        <ToolbarButton
            label="Redo"
            onClick={onClick}
            disabled={disabled}
        />
    )
}

function isRedoable(state: RootState): boolean {
    for (let value of Object.values(state)) {
        const sub = value as any

        if (sub && sub.future && sub.future.length > 0) {
            return true
        }
    }

    return false
}
