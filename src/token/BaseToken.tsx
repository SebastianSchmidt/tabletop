import { useCallback, MouseEvent } from 'react'
import chroma from 'chroma-js'
import classNames from 'classnames'
import { getTextColor } from '../shared'
import { Direction } from './types'
import styles from './BaseToken.module.css'

type Props = {
    id: string
    size: number,
    color: string,
    symbol: string,
    direction: Direction,
    selected: boolean,
    onTokenClick?: (id: string) => void
    onDirectionClick?: (id: string, direction: Direction) => void
    circleRef?: any
    containerClassName?: string
    circleClassName?: string
}

type DirectionProps = {
    direction: Direction
    currentDirection: Direction
    onClick: (event: MouseEvent) => void
    className: string
    style: any
}

export function BaseToken({
    id,
    size,
    color,
    symbol,
    direction,
    selected,
    onTokenClick,
    onDirectionClick,
    circleRef,
    containerClassName,
    circleClassName
}: Props) {
    // Event handlers
    const onCircleClick = useCircleClick(id, onTokenClick)
    const onNorthClick = useDirectionClick(Direction.North, id, onDirectionClick)
    const onSouthClick = useDirectionClick(Direction.South, id, onDirectionClick)
    const onWestClick = useDirectionClick(Direction.West, id, onDirectionClick)
    const onEastClick = useDirectionClick(Direction.East, id, onDirectionClick)

    // Styling

    const colors = generateColors(color)
    const containerStyle = generateContainerStyle(size)
    const circleStyle = generateCircleStyle(colors)
    const northStyle = generateNorthStyle(size, colors)
    const southStyle = generateSouthStyle(size, colors)
    const westStyle = generateWestStyle(size, colors)
    const eastStyle = generateEastStyle(size, colors)

    const containerClasses = classNames(
        styles.container,
        { [styles.selected]: selected },
        containerClassName
    )

    const circleClasses = classNames(
        styles.circle,
        circleClassName
    )

    // JSX

    return (
        <div
            className={containerClasses}
            style={containerStyle}
        >

            <div
                ref={circleRef}
                onClick={onCircleClick}
                className={circleClasses}
                style={circleStyle}
            >
                <span>{symbol}</span>
            </div>

            <DirectionNode
                direction={Direction.North}
                currentDirection={direction}
                onClick={onNorthClick}
                className={styles.north}
                style={northStyle}
            />

            <DirectionNode
                direction={Direction.South}
                currentDirection={direction}
                onClick={onSouthClick}
                className={styles.south}
                style={southStyle}
            />

            <DirectionNode
                direction={Direction.West}
                currentDirection={direction}
                onClick={onWestClick}
                className={styles.west}
                style={westStyle}
            />

            <DirectionNode
                direction={Direction.East}
                currentDirection={direction}
                onClick={onEastClick}
                className={styles.east}
                style={eastStyle}
            />

        </div>
    )
}

function DirectionNode({
    direction,
    currentDirection,
    onClick,
    className,
    style
}: DirectionProps) {
    const current = direction === currentDirection
    return (
        <div
            onClick={onClick}
            className={classNames(className, styles.direction, { [styles.current]: current })}
            style={style}
        />
    )
}

// Event handlers

function useCircleClick(
    id: string,
    onTokenClick?: (id: string) => void
) {
    return useCallback((event) => {
        if (onTokenClick) {
            event.stopPropagation()
            onTokenClick(id)
        }
    }, [id, onTokenClick])
}

function useDirectionClick(
    direction: Direction, id: string,
    onDirectionClick?: (id: string, direction: Direction) => void
) {
    return useCallback((event) => {
        if (onDirectionClick) {
            event.stopPropagation()
            onDirectionClick(id, direction)
        }
    }, [direction, id, onDirectionClick])
}

// Styling

type Colors = {
    backgroundColor: string
    borderColor: string
    textColor: string
}

function generateColors(color: string): Colors {
    const chromaticity = chroma(color).get('lch.c')
    const saturate = chromaticity > 10 ? 2 : 0

    return {
        backgroundColor: color,
        borderColor: chroma(color).darken(2).saturate(saturate).hex(),
        textColor: getTextColor(color)
    }
}

function generateContainerStyle(size: number) {
    return {
        width: size + 'px',
        height: size + 'px'
    }
}

function generateCircleStyle(colors: Colors) {
    return {
        backgroundColor: colors.backgroundColor,
        borderColor: colors.borderColor,
        color: colors.textColor
    }
}

function generateNorthStyle(size: number, colors: Colors) {
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

function generateSouthStyle(size: number, colors: Colors) {
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

function generateWestStyle(size: number, colors: Colors) {
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

function generateEastStyle(size: number, colors: Colors) {
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

function generateBorderWidth(size: number) {
    return ((size / 10) * 3) + 'px'
}

function generatePosition(size: number) {
    return (size / 5) + 'px'
}
