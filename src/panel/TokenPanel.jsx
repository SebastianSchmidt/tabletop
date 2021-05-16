import { Panel } from './Panel'
import { PanelCategory } from './PanelCategory'

export function TokenPanel({ id }) {
    return (
        <Panel title="Token">
            <PanelCategory>
                Debug: {id}
            </PanelCategory>
        </Panel>
    )
}
