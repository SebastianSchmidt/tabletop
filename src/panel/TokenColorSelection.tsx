import { useCallback } from 'react'
import { useSelector, useDispatch } from '../app'
import { findTokenById, updateToken } from '../token'
import { SelectField } from '../forms'
import { getTextColor } from '../shared'

const colors = [
    createColor('Yellow', '#fff2cc'),
    createColor('Red', '#f8cecc'),
    createColor('Purple', '#d1c4e9'),
    createColor('Blue', '#bbdefb'),
    createColor('Green', '#d5e8d4'),
    createColor('Grey', '#cfd8dc'),
    createColor('Dark yellow', '#fdd835'),
    createColor('Dark red', '#c62828'),
    createColor('Dark purple', '#673ab7'),
    createColor('Dark blue', '#1976d2'),
    createColor('Dark green', '#2e7d32'),
    createColor('Dark gray', '#647687')
]

function createColor(label: string, color: string) {
    return {
        label,
        value: normalizeColor(color),
        style: {
            backgroundColor: color,
            color: getTextColor(color)
        }
    }
}

function normalizeColor(color?: string) {
    return color ? color.toLowerCase() : null
}

type Props = {
    id: string
}

// TODO Nicht bekannte Farbe als Option darstellen.
export function TokenColorSelection({ id }: Props) {
    const color = useSelector(state => {
        const color = findTokenById(state, id)?.color
        return normalizeColor(color)
    })

    const dispatch = useDispatch()
    const onChange = useCallback((color) => {
        dispatch(updateToken({
            id,
            color
        }))
    }, [dispatch, id])

    return color ? (
        <SelectField
            label="Color"
            options={colors}
            value={color}
            onChange={onChange}
        />
    ) : null
}
