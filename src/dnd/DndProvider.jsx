import { DndProvider as Provider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { CustomDragLayer } from './CustomDragLayer'

export function DndProvider({ children }) {
    return (
        <Provider backend={HTML5Backend}>
            <CustomDragLayer />
            { children }
        </Provider>
    )
}
