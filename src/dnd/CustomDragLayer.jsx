import { useDragLayer } from 'react-dnd'
import { TOKEN_DND_TYPE, DraggableTokenPreview } from '../token'
import styles from './CustomDragLayer.module.css'

export function CustomDragLayer() {
    const {
        item,
        itemType,
        currentOffset,
        isDragging
    } = useDragLayer(monitor => ({
        item: monitor.getItem(),
        itemType: monitor.getItemType(),
        currentOffset: monitor.getSourceClientOffset(),
        isDragging: monitor.isDragging()
    }))

    if (!isDragging || !currentOffset) {
        return null
    }
    const preview = renderPreview(item, itemType, currentOffset)

    if (!preview) {
        return null
    }

    return (
        <div className={styles.layer}>
            {preview}
        </div>
    )
}

function renderPreview(item, type, offset) {
    switch (type) {
        case TOKEN_DND_TYPE:
            return <DraggableTokenPreview offset={offset} {...item} />
        default:
            return null
    }
}
