// local imports
import random from 'util/random'


export function randomColor() {
    return [
        Math.floor(random(0, 256)),
        Math.floor(random(0, 256)),
        Math.floor(random(0, 256)),
    ]
}


export function toCSS(color, alpha = 1) {
    return `rgba(${color.join(',')},${alpha})`
}
