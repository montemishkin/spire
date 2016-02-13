// local imports
import modScalar from 'util/mod'


export function dot([x1, y1], [x2, y2]) {
    return (x1 * x2) + (y1 * y2)
}


export function scale(scalar, [x, y]) {
    return [scalar * x, scalar * y]
}


export function magnitude([x, y]) {
    return Math.sqrt((x * x) + (y * y))
}


export function magnitudeSquared([x, y]) {
    return (x * x) + (y * y)
}


export function normalize([x, y]) {
    const mag = Math.sqrt((x * x) + (y * y))

    return mag === 0
        ? [x, y]
        : [x / mag, y / mag]
}


export function add([x1, y1], [x2, y2]) {
    return [x1 + x2, y1 + y2]
}


export function subtract([x1, y1], [x2, y2]) {
    return [x1 - x2, y1 - y2]
}


export function mod([x1, y1], [x2, y2]) {
    return [modScalar(x1, x2), modScalar(y1, y2)]
}


export function operate([[a, b], [c, d]], [x, y]) {
    return [(a * x) + (b * y), (c * x) + (d * y)]
}


/**
 * Rotates clockwise from positive x-axis.
 * I chose clockwise (rather than counterclockwise as usual)
 * since positive y-axis is down (rather than up as usual).
 */
export function rotate(theta, [x, y]) {
    const sin = Math.sin(theta)
    const cos = Math.cos(theta)

    return [(x * cos) - (y * sin), (x * sin) + (y * cos)]
}


export function flipX([x, y]) {
    return [-x, y]
}


export function flipY([x, y]) {
    return [x, -y]
}


export function flip([x, y]) {
    return [-x, -y]
}
