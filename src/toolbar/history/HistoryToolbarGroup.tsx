import { ToolbarGroup } from '../ToolbarGroup'
import { UndoToolbarButton } from './UndoToolbarButton'
import { RedoToolbarButton } from './RedoToolbarButton'

export function HistoryToolbarGroup() {
    return (
        <ToolbarGroup>
            <UndoToolbarButton />
            <RedoToolbarButton />
        </ToolbarGroup>
    )
}
