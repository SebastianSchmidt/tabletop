import { ReactNode } from 'react'
import styles from './Panel.module.css'

type Props = {
    title: string,
    children: ReactNode
}

export function Panel({ title, children }: Props) {
    return (
        <div>
            <h1 className={styles.title}>{title}</h1>
            {children}
        </div>
    )
}
