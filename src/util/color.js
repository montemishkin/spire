// local imports
import random from 'util/random'


export function randomColor() {
    return [
        random(0, 100),
        random(0, 100),
        random(0, 100),
    ]
}


export function toCSS(color, alpha = 1) {
    return `rgba(${color.join('%,')}%,${alpha})`
}
