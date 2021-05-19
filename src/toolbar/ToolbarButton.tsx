import styles from './Toolbar.module.css'

type Props = {
    label: string
    disabled?: boolean
    onClick: () => void
}

// TODO Icons statt Text
export function ToolbarButton({
    label,
    disabled,
    onClick
}: Props) {
    return (
        <button
            className={styles.button}
            onClick={onClick}
            disabled={disabled}
        >
            {label}
        </button>
    )
}
