import { Panel } from './Panel'
import { PanelCategory } from './PanelCategory'
import { TokenSymbolField } from './TokenSymbolField'
import { TokenColorSelection } from './TokenColorSelection'
import { TokenDirectionSelection } from './TokenDirectionSelection'

export function TokenPanel({ id }) {
    return (
        <Panel title="Token">
            <PanelCategory>
                <TokenSymbolField id={id} />
                <TokenColorSelection id={id} />
                <TokenDirectionSelection id={id} />
            </PanelCategory>
        </Panel>
    )
}
