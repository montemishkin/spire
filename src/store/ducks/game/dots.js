// local imports
import {randomColor} from 'util/color'
import random from 'util/random'


// Action Types

export const REPLACE_DOTS = 'spire/game/REPLACE_DOTS'
export const SET_NUM_DOTS = 'spire/game/SET_NUM_DOTS'


// Action Creators

export function replaceDots(dots) {
    return {type: REPLACE_DOTS, dots}
}


export function setNumDots(value) {
    return {type: SET_NUM_DOTS, value}
}


// Reducer

const initialState = {
    max: 1000,
    num: 200,
    items: [],
}
for (var i = 0; i < initialState.max; i++) {
    initialState.items.push({
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
                items: action.dots,
            }
        case SET_NUM_DOTS:
            return {
                ...state,
                num: action.value > state.max ? state.max : action.value,
            }
        default:
            return state
    }
}
