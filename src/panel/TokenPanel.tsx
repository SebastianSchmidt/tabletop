import { Panel } from './Panel'
import { PanelCategory } from './PanelCategory'
import { TokenSymbolField } from './TokenSymbolField'
import { TokenColorSelection } from './TokenColorSelection'
import { TokenDirectionSelection } from './TokenDirectionSelection'

type Props = {
    id: string
}

export function TokenPanel({ id }: Props) {
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
