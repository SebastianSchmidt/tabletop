import classNames from 'classnames'
import styles from './Toolbar.module.css'
import { TokenToolbarGroup } from './token'

type Props = {
    className?: string
}

export function Toolbar({ className }: Props) {
    return (
        <div className={classNames(styles.container, className)}>
            <TokenToolbarGroup />
        </div>
    )
}
