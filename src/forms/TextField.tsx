import { useCallback, FocusEventHandler } from 'react'
import { useInput } from './use-input'
import styles from './Forms.module.css'

type Props = {
    label?: string
    max: number
    value: string
    onChange: (value: string) => void
    onFocus: FocusEventHandler<any>
}

export function TextField({
    label,
    max,
    value,
    onChange,
    onFocus
}: Props) {
    const changeHandler = useChangeHandler(max, onChange)
    const [bind] = useInput(value, changeHandler)

    return (
        <div className={styles.element}>
            {label ? <label className={styles.label}>{label}</label> : null}
            <input
                className={styles.input}
                type="text"
                maxLength={max}
                onFocus={onFocus}
                {...bind}
            />
        </div>
    )
}

function useChangeHandler(
    max: number,
    onChange: (value: string) => void
) {
    return useCallback((value) => {
        if (value.length <= max) {
            onChange(value)
        }
    }, [max, onChange])
}
