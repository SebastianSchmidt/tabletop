import { ReactNode } from 'react'
import styles from './PanelCategory.module.css'

type Props = {
    title?: string,
    children: ReactNode
}

export function PanelCategory({ title, children }: Props) {
    return (
        <div className={styles.container}>
            {title ? <h2 className={styles.title}>{title}</h2> : null}
            {children}
        </div>
    )
}
