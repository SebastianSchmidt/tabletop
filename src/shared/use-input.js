import { useState, useEffect } from 'react'

export const useInput = (initialValue, listener = null) => {
    const [value, setValue] = useState(initialValue)

    useEffect(() => setValue(initialValue), [initialValue])

    const bind = {
        value,
        onChange: (event) => {
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
