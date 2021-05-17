import { Panel } from './Panel'
import { PanelCategory } from './PanelCategory'
import { TokenColorSelection } from './TokenColorSelection'

export function TokenPanel({ id }) {
    return (
        <Panel title="Token">
            <PanelCategory>
                <TokenColorSelection id={id} />
            </PanelCategory>
        </Panel>
    )
}
