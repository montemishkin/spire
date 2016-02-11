export function dot([x1, y1], [x2, y2]) {
    return (x1 * x2) + (y1 * y2)
}


export function scale(scalar, [x, y]) {
    return [scalar * x, scalar * y]
}


export function add([x1, y1], [x2, y2]) {
    return [x1 + x2, y1 + y2]
}


export function subtract([x1, y1], [x2, y2]) {
    return [x1 - x2, y1 - y2]
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
