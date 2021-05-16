import { useCallback } from 'react'
import { useInput } from './use-input'
import styles from './Forms.module.css'

export function NumberField({
    label,
    min,
    max,
    value,
    onChange
}) {
    const changeHandler = useCallback((string) => {
        const value = parseInt(string)

        if (!isNaN(value) && min <= value && value <= max) {
            onChange(value)
        }
    }, [min, max, onChange])

    const [bind] = useInput(value, changeHandler)

    return (
        <div className={styles.element}>
            <label className={styles.label}>{label}</label>
            <input
                className={styles.input}
                type="number"
                min={min}
                max={max}
                {...bind}
            />
        </div>
    )
}
