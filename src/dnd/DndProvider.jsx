import { DndProvider as Provider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { CustomDragLayer } from './CustomDragLayer'

// TODO Aktuell kein TouchBackend mit "enableMouseEvents: true" weil:
// Unterschied durch Touch-Backend zwischen Mouse und Touch:
// Bei Mouse wird nach Drag die Selektierung von Tokens aufgehoben (durch Click-Event auf Grid).
export function DndProvider({ children }) {
    return (
        <Provider backend={HTML5Backend}>
            <CustomDragLayer />
            {children}
        </Provider>
    )
}
