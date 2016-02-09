// local imports
import random from 'util/random'


export function randomColor() {
    return {
        h: random(0, 360),
        s: random(0, 100),
        l: random(0, 100),
    }
}


export function toCSS(color) {
    return `hsl(${color.h},${color.s}%,${color.l}%)`
}
