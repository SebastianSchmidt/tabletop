import { Panel } from './Panel'
import { PanelCategory } from './PanelCategory'
import { TokenColorSelection } from './TokenColorSelection'
import { TokenDirectionSelection } from './TokenDirectionSelection'

export function TokenPanel({ id }) {
    return (
        <Panel title="Token">
            <PanelCategory>
                <TokenColorSelection id={id} />
                <TokenDirectionSelection id={id} />
            </PanelCategory>
        </Panel>
    )
}
