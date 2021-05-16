import { useSelector } from 'react-redux'
import { getSelectedTokenId } from '../field'
import styles from './PanelContainer.module.css'
import { FieldPanel } from './FieldPanel'
import { TokenPanel } from './TokenPanel'

export function PanelContainer() {
    const selectedTokenId = useSelector(getSelectedTokenId)

    return (
        <div className={styles.container}>
            {selectedTokenId
                ? <TokenPanel id={selectedTokenId} />
                : <FieldPanel />
            }
        </div>
    )
}
