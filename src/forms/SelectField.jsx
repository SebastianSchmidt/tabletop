import { useCallback, useMemo } from 'react'
import { useInput } from './use-input'
import styles from './Forms.module.css'

export function SelectField(props) {
    const { value, label, onChange } = props

    const changeHandler = useCallback((value) => onChange(value), [onChange])
    const [bind, currentValue] = useInput(value, changeHandler)

    const options = useMemo(
        () => props.options.map(transformOption),
        [props.options]
    )

    const selectStyle = useMemo(
        () => getSelectStyle(currentValue, options),
        [currentValue, options]
    )

    return (
        <div className={styles.element}>
            {label ? <label className={styles.label}>{label}</label> : null}
            <select
                className={styles.select}
                style={selectStyle}
                {...bind}
            >
                {options.map(generateOption)}
            </select>
        </div>
    )
}

function transformOption(option) {
    let value = null
    let label = null
    let style = null

    if (typeof option === 'object' && option !== null) {
        value = option.value
        label = option.label
        style = option.style
    } else {
        value = option + ''
    }

    if (label === null || label === undefined) {
        label = value
    }

    return {
        value,
        label,
        style
    }
}

function getSelectStyle(currentValue, options) {
    const option = options.find(option => option.value === currentValue)
    return option ? option.style : null
}

function generateOption({ value, label, style }) {
    return (
        <option
            key={value}
            className={styles.option}
            value={value}
            style={style}
        >
            {label}
        </option>
    )
}
