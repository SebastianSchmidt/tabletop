import { ReactNode } from 'react'
import styles from './Toolbar.module.css'

type Props = {
    children: ReactNode
}

export function ToolbarGroup({ children }: Props) {
    return (
        <div className={styles.group}>
            {children}
        </div>
    )
}
