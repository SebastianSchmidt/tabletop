import { useCallback } from 'react'
import { useDrag } from 'react-dnd'
import styles from './Token.module.css'
import chroma from 'chroma-js'
import classNames from 'classnames'

export const Direction = Object.freeze({
    north: 'north',
    south: 'south',
    west: 'west',
    east: 'east'
})

export const TokenType = 'Token'

const BLACK_TEXT = '#000000'
const WHITE_TEXT = '#FFFFFF'

export function Token({
    id,
    size,
    color,
    symbol,
    direction,
    onTokenClick,
    onDirectionClick,
    selected,
    draggable
}) {
    // Logic

    const [{ isDragging }, drag] = useDraggable(id, draggable)

    const onCircleClick = useCircleClick(id, onTokenClick)
    const onNorthClick = useDirectionClick(Direction.north, id, onDirectionClick)
    const onSouthClick = useDirectionClick(Direction.south, id, onDirectionClick)
    const onWestClick = useDirectionClick(Direction.west, id, onDirectionClick)
    const onEastClick = useDirectionClick(Direction.east, id, onDirectionClick)

    // Styling

    const colors = generateColors(color)

    const containerStyle = generateContainerStyle(size)
    const circleStyle = generateCircleStyle(colors)
    const northStyle = generateNorthStyle(size, colors)
    const southStyle = generateSouthStyle(size, colors)
    const westStyle = generateWestStyle(size, colors)
    const eastStyle = generateEastStyle(size, colors)

    const containerClassName = classNames(
        styles.container,
        {
            [styles.selected]: selected,
            [styles.dragging]: isDragging
        }
    )

    const circleClassName = classNames(
        styles.circle,
        {
            [styles.draggable]: draggable
        }
    )

    // JSX

    return (
        <div
            ref={drag}
            className={containerClassName}
            style={containerStyle}
        >
            <div
                onClick={onCircleClick}
                className={circleClassName}
                style={circleStyle}
            >
                <span>{symbol}</span>
            </div>
            {directionNode(Direction.north, onNorthClick, northStyle, styles.north, styles, direction)}
            {directionNode(Direction.south, onSouthClick, southStyle, styles.south, styles, direction)}
            {directionNode(Direction.west, onWestClick, westStyle, styles.west, styles, direction)}
            {directionNode(Direction.east, onEastClick, eastStyle, styles.east, styles, direction)}
        </div>
    )
}

// Logic

function useDraggable(id, draggable) {
    return useDrag(() => ({
        type: TokenType,
        item: { id },
        canDrag: () => draggable,
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }), [id, draggable])
}

function useCircleClick(id, onTokenClick) {
    return useCallback((event) => {
        if (onTokenClick) {
            event.stopPropagation()
            onTokenClick(id)
        }
    }, [id, onTokenClick])
}

function useDirectionClick(direction, id, onDirectionClick) {
    return useCallback((event) => {
        if (onDirectionClick) {
            event.stopPropagation()
            onDirectionClick(id, direction)
        }
    }, [direction, id, onDirectionClick])
}

// Styling

function generateColors(color) {
    const blackText = chroma.contrast(BLACK_TEXT, color) >= chroma.contrast(WHITE_TEXT, color)
    return {
        backgroundColor: color,
        borderColor: chroma(color).darken(2).saturate(2).hex(),
        textColor: blackText ? BLACK_TEXT : WHITE_TEXT
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
        borderColor: colors.borderColor,
        color: colors.textColor
    }
}

function generateNorthStyle(size, colors) {
    const borderWidth = generateBorderWidth(size)
    return {
        top: 0,
        left: generatePosition(size),
        borderLeftWidth: borderWidth,
        borderRightWidth: borderWidth,
        borderBottomWidth: borderWidth,
        borderBottomColor: colors.borderColor
    }
}

function generateSouthStyle(size, colors) {
    const borderWidth = generateBorderWidth(size)
    return {
        bottom: 0,
        left: generatePosition(size),
        borderLeftWidth: borderWidth,
        borderRightWidth: borderWidth,
        borderTopWidth: borderWidth,
        borderTopColor: colors.borderColor
    }
}

function generateWestStyle(size, colors) {
    const borderWidth = generateBorderWidth(size)
    return {
        top: generatePosition(size),
        left: 0,
        borderTopWidth: borderWidth,
        borderBottomWidth: borderWidth,
        borderRightWidth: borderWidth,
        borderRightColor: colors.borderColor
    }
}

function generateEastStyle(size, colors) {
    const borderWidth = generateBorderWidth(size)
    return {
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

// JSX

function directionNode(direction, onClick, style, className, styles, currentDirection) {
    const current = direction === currentDirection
    return (
        <div
            onClick={onClick}
            className={classNames(className, styles.direction, { [styles.current]: current })}
            style={style}
        />
    )
}