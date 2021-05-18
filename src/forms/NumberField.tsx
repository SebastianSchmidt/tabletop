import { useCallback } from 'react'
import { useInput } from './use-input'
import styles from './Forms.module.css'

type Props = {
    label?: string
    min: number
    max: number
    value: number
    onChange: (value: number) => void
}

export function NumberField({
    label,
    min,
    max,
    value,
    onChange
}: Props) {
    const changeHandler = useChangeHandler(min, max, onChange)
    const [bind] = useInput(value, changeHandler)

    return (
        <div className={styles.element}>
            {label ? <label className={styles.label}>{label}</label> : null}
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

function useChangeHandler(
    min: number,
    max: number,
    onChange: (value: number) => void
) {
    return useCallback((string) => {
        const value = parseInt(string)

        if (!isNaN(value) && min <= value && value <= max) {
            onChange(value)
        }
    }, [min, max, onChange])
}
