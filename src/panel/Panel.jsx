import styles from './Panel.module.css'

export function Panel({ title, children }) {
    return (
        <div>
            <h1 className={styles.title}>{title}</h1>
            {children}
        </div>
    )
}
