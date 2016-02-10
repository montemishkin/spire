// local imports
import {randomColor} from 'util/color'
import random from 'util/random'


// Action Types

export const REPLACE_DOTS = 'dots/game/REPLACE_DOTS'
export const PLAY = 'dots/game/PLAY'
export const PAUSE = 'dots/game/PAUSE'


// Action Creators

export function replaceDots(dots) {
    return {type: REPLACE_DOTS, dots}
}


export function play() {
    return {type: PLAY}
}


export function pause() {
    return {type: PAUSE}
}


// Reducer

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
        case PAUSE:
            return {
                ...state,
                isPaused: true,
            }
        case PLAY:
            return {
                ...state,
                isPaused: false,
            }
        default:
            return state
    }
}
