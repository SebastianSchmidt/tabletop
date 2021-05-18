import { useEffect } from 'react'
import { ConnectDragPreview } from 'react-dnd'

const empty = new Image()
empty.src = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='

export function useDisablePreview(preview: ConnectDragPreview) {
    useEffect(() => {
        preview(empty, { captureDraggingState: true })
    }, [preview])
}
