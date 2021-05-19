import { memo } from 'react'
import classNames from 'classnames'
import styles from './Toolbar.module.css'
import { TokenToolbarGroup } from './token'
import { HistoryToolbarGroup } from './history'
import { ViewToolbarGroup } from './view'

type Props = {
    className?: string
}

export const Toolbar = memo(({ className }: Props) => {
    return (
        <div className={classNames(styles.container, className)}>
            <TokenToolbarGroup />
            <HistoryToolbarGroup />
            <ViewToolbarGroup />
        </div>
    )
})
