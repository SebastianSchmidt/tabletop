import { CSSProperties } from 'react'
import { Toolbar } from '../toolbar'
import { Field } from '../field'
import { PanelContainer, isPanelVisible } from '../panel'
import { useSelector } from './store'
import styles from './Layout.module.css'
import './base.css'

export function Layout() {
    const panel = useSelector(isPanelVisible)
    const style = generateContainerStyle(panel)

    return (
        <div className={styles.container} style={style}>
            <Toolbar className={styles.toolbar} />
            <Field className={styles.field} />
            {panel ? <PanelContainer className={styles.tokenPanel} /> : null}
        </div>
    )
}

function generateContainerStyle(panel: boolean): CSSProperties {
    const fieldWidth = 'auto'
    const panelWidth = panel ? '200px' : '0px'

    return {
        gridTemplateColumns: `${fieldWidth} ${panelWidth}`
    }
}
