import { useCallback, useMemo, CSSProperties } from 'react'
import { useInput } from './use-input'
import styles from './Forms.module.css'

type Option = {
    value: string
    label?: string
    style?: CSSProperties
}

type Props = {
    label?: string
    options: Option[] | any[]
    value: string
    onChange: (value: string) => void
}

export function SelectField({
    label,
    options,
    value,
    onChange
}: Props) {
    const changeHandler = useChangeHandler(onChange)
    const [bind, currentValue] = useInput(value, changeHandler)

    const optionsNormalized = useOptions(options)
    const selectStyle = useSelectStyle(currentValue, optionsNormalized)

    return (
        <div className={styles.element}>
            {label ? <label className={styles.label}>{label}</label> : null}
            <select
                className={styles.select}
                style={selectStyle}
                {...bind}
            >
                {optionsNormalized.map(generateOption)}
            </select>
        </div>
    )
}

function useChangeHandler(onChange: (value: string) => void) {
    return useCallback((value) => {
        if (onChange) {
            onChange(value)
        }
    }, [onChange])
}

function useOptions(options: Option[] | string[]): Option[] {
    return useMemo(
        () => options.map(transformOption),
        [options]
    )
}

function transformOption(option: Option | string): Option {
    let value = null
    let label = null
    let style = undefined

    if (typeof option === 'object' && option !== null && option.value !== undefined) {
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

function useSelectStyle(currentValue: string, options: Option[]) {
    return useMemo(
        () => getSelectStyle(currentValue, options),
        [currentValue, options]
    )
}

function getSelectStyle(currentValue: string, options: Option[]) {
    const option = options.find(option => option.value === currentValue)
    return option ? option.style : null
}

function generateOption({ value, label, style }: Option) {
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
