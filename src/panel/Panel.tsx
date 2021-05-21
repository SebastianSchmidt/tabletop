import { ReactNode } from 'react'
import styles from './Panel.module.css'

type Props = {
    title: string,
    children: ReactNode,
    className?: string
}

export function Panel({ title, children, className }: Props) {
    return (
        <div className={className}>
            <h1 className={styles.title}>{title}</h1>
            {children}
        </div>
    )
}
