export function dot([x1, y1, z1], [x2, y2, z2]) {
    return (x1 * x2) + (y1 * y2) + (z1 * z2)
}


export function scale(scalar, [x, y, z]) {
    return [scalar * x, scalar * y, scalar * z]
}


export function magnitude([x, y, z]) {
    return Math.sqrt((x * x) + (y * y) + (z * z))
}


export function magnitudeSquared([x, y, z]) {
    return (x * x) + (y * y) + (z * z)
}


export function normalize([x, y, z]) {
    const mag = Math.sqrt((x * x) + (y * y) + (z * z))

    return mag === 0
        ? [x, y, z]
        : [x / mag, y / mag, z / mag]
}


export function add([x1, y1, z1], [x2, y2, z2]) {
    return [x1 + x2, y1 + y2, z1 + z2]
}


export function subtract([x1, y1, z1], [x2, y2, z2]) {
    return [x1 - x2, y1 - y2, z1 - z2]
}


export function operate([[a, b, c], [d, e, f], [g, h, i]], [x, y, z]) {
    return [
        (a * x) + (b * y) + (c * z),
        (d * x) + (e * y) + (f * z),
        (g * x) + (h * y) + (i * z),
    ]
}


/**
 * Rotates `[x, y, z]` by `theta` about `[a, b, c]` in direction
 * indicated by right hand (point thumb along `[a, b, c]`, fingers curl
 * in direction of increasing `theta`).
 */
// export function rotate(theta, [a, b, c], [x, y, z]) {
//     // TODO
// }


export function flipX([x, y, z]) {
    return [-x, y, z]
}


export function flipY([x, y, z]) {
    return [x, -y, z]
}


export function flipZ([x, y, z]) {
    return [x, y, -z]
}


export function flip([x, y, z]) {
    return [-x, -y, -z]
}
