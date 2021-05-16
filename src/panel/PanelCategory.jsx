import styles from './PanelCategory.module.css'

export function PanelCategory({ title, children }) {
    return (
        <div className={styles.container}>
            {title ? <h2 className={styles.title}>{title}</h2> : null}
            {children}
        </div>
    )
}
