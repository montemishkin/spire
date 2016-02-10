// local imports
import {randomColor} from 'util/color'
import random from 'util/random'


export const REPLACE_DOTS = 'dots/game/REPLACE_DOTS'


export function replaceDots(dots) {
    return {type: REPLACE_DOTS, dots}
}


const initialState = {
    isPaused: false,
    dt: 0.1,
    background: randomColor(),
    numDots: 200,
    dots: [],
}
for (var i = 0; i < initialState.numDots; i++) {
    initialState.dots.push({
        p: [0, 0],
        v: [random(0, 30), random(0, 30)],
        r: 10,
        c: randomColor(),
    })
}


export default (state = initialState, action) => {
    switch (action.type) {
        case REPLACE_DOTS:
            return {
                ...state,
                dots: action.dots,
            }
        default:
            return state
    }
}
