import styles from './Token.module.css'
import chroma from 'chroma-js'

export const Direction = Object.freeze({
    north: 'north',
    south: 'south',
    west: 'west',
    east: 'east'
})

export function Token({ size, color, symbol, direction }) {
    const colors = generateColors(color)

    const containerStyle = generateContainerStyle(size)
    const circleStyle = generateCircleStyle(colors)
    const northStyle = generateNorthStyle(size, direction, colors)
    const southStyle = generateSouthStyle(size, direction, colors)
    const westStyle = generateWestStyle(size, direction, colors)
    const eastStyle = generateEastStyle(size, direction, colors)

    return (
        <div className={styles.container} style={containerStyle}>
            <div className={styles.circle} style={circleStyle}>
                <span>{symbol}</span>
            </div>
            <div className={styles.north} style={northStyle} />
            <div className={styles.south} style={southStyle} />
            <div className={styles.west} style={westStyle} />
            <div className={styles.east} style={eastStyle} />
        </div>
    )
}

function generateColors(color) {
    return {
        backgroundColor: color,
        borderColor: chroma(color).darken(2).saturate(2).hex()
    }
}

function generateContainerStyle(size) {
    return {
        width: size + 'px',
        height: size + 'px'
    }
}

function generateCircleStyle(colors) {
    return {
        backgroundColor: colors.backgroundColor,
        borderColor: colors.borderColor
    }
}

function generateNorthStyle(size, direction, colors) {
    const borderWidth = generateBorderWidth(size)
    return {
        ...generateBaseDirectionStyle(Direction.north, direction),
        top: 0,
        left: generatePosition(size),
        borderLeftWidth: borderWidth,
        borderRightWidth: borderWidth,
        borderBottomWidth: borderWidth,
        borderBottomColor: colors.borderColor
    }
}

function generateSouthStyle(size, direction, colors) {
    const borderWidth = generateBorderWidth(size)
    return {
        ...generateBaseDirectionStyle(Direction.south, direction),
        bottom: 0,
        left: generatePosition(size),
        borderLeftWidth: borderWidth,
        borderRightWidth: borderWidth,
        borderTopWidth: borderWidth,
        borderTopColor: colors.borderColor
    }
}

function generateWestStyle(size, direction, colors) {
    const borderWidth = generateBorderWidth(size)
    return {
        ...generateBaseDirectionStyle(Direction.west, direction),
        top: generatePosition(size),
        left: 0,
        borderTopWidth: borderWidth,
        borderBottomWidth: borderWidth,
        borderRightWidth: borderWidth,
        borderRightColor: colors.borderColor
    }
}

function generateEastStyle(size, direction, colors) {
    const borderWidth = generateBorderWidth(size)
    return {
        ...generateBaseDirectionStyle(Direction.east, direction),
        top: generatePosition(size),
        right: 0,
        borderTopWidth: borderWidth,
        borderBottomWidth: borderWidth,
        borderLeftWidth: borderWidth,
        borderLeftColor: colors.borderColor
    }
}

function generateBorderWidth(size) {
    return ((size / 10) * 3) + 'px'
}

function generatePosition(size) {
    return (size / 5) + 'px'
}

function generateBaseDirectionStyle(direction, actualDirection) {
    return {
        visibility: direction === actualDirection ? 'visible' : 'hidden'
    }
}
