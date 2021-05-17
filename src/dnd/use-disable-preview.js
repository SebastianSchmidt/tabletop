import { useEffect } from 'react'

const empty = new Image()
empty.src = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='

export function useDisablePreview(preview) {
    useEffect(() => {
        preview(empty, { captureDraggingState: true })
    }, [preview])
}
