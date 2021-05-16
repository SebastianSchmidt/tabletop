import { Field } from '../field'
import { PanelContainer } from '../panel'
import styles from './App.module.css'

function App() {
    return (
        <div className={styles.container}>
            <Field className={styles.field} />
            <PanelContainer className={styles.tokenPanel} />
        </div>
    )
}

export default App
