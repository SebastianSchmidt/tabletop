import { Toolbar } from '../toolbar'
import { Field } from '../field'
import { PanelContainer } from '../panel'
import styles from './Layout.module.css'
import './base.css'

export function Layout() {
    return (
        <div className={styles.container}>
            <Toolbar className={styles.toolbar} />
            <Field className={styles.field} />
            <PanelContainer className={styles.tokenPanel} />
        </div>
    )
}
