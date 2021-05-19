import { useDispatch } from '../../app'
import { togglePanel } from '../../view'
import { ToolbarButton } from '../ToolbarButton'

export function TogglePanelToolbarButton() {
    const dispatch = useDispatch()
    const onClick = () => dispatch(togglePanel())

    return (
        <ToolbarButton
            label="Panel"
            onClick={onClick}
        />
    )
}
