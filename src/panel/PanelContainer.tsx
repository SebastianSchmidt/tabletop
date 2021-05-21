import { memo } from 'react'
import { useSelector } from 'react-redux'
import classNames from 'classnames'
import { getSelectedTokenId } from '../view'
import { FieldPanel } from './FieldPanel'
import { TokenPanel } from './TokenPanel'
import { NewToken } from './NewToken'
import styles from './PanelContainer.module.css'

type Prop = {
    className?: string
}

export const PanelContainer = memo(({ className }: Prop) => {
    const selectedTokenId = useSelector(getSelectedTokenId)

    return (
        <div className={classNames(styles.container, className)}>
            <div className={styles.dynamic}>
                {selectedTokenId
                    ? <TokenPanel id={selectedTokenId} />
                    : <FieldPanel />
                }
            </div>
            <div className={styles.newToken}>
                <NewToken />
            </div>
        </div>
    )
})
