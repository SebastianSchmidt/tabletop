import { useCallback } from 'react'
import { useInput } from './use-input'
import styles from './Forms.module.css'

export function TextField({
    label,
    max,
    value,
    onChange,
    onFocus
}) {
    const changeHandler = useCallback((value) => {
        if (value.length <= max) {
            onChange(value)
        }
    }, [max, onChange])

    const [bind] = useInput(value, changeHandler)

    return (
        <div className={styles.element}>
            <label className={styles.label}>{label}</label>
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
