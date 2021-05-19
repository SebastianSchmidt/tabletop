import { memo } from 'react'
import classNames from 'classnames'
import { useDispatch } from '../app'
import { deselectToken } from '../view'
import { Grid } from './Grid'
import styles from './Field.module.css'

const BASE_CELL_SIZE = 100

type Prop = {
    className?: string
}

export const Field = memo(({ className }: Prop) => {
    const dispatch = useDispatch()
    const onDeselectToken = () => dispatch(deselectToken())

    return (
        <div className={classNames(styles.field, className)}>
            <div
                className={styles.gridWrapper}
                onClick={onDeselectToken}
            >
                <Grid cellSize={BASE_CELL_SIZE} />
            </div>
        </div>
    )
})
