import { useState, useEffect, ChangeEvent } from 'react'

export const useInput = (
    initialValue: any,
    listener?: (value: any) => void
): [any, any, (value: any) => void] => {
    const [value, setValue] = useState(initialValue)

    useEffect(() => setValue(initialValue), [initialValue])

    const bind = {
        value,
        onChange: (event: ChangeEvent<any>) => {
            setValue(event.target.value)
            if (listener) {
                listener(event.target.value)
            }
        }
    }

    return [
        bind,
        value,
        setValue
    ]
}
