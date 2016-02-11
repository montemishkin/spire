// local imports
import {randomColor} from 'util/color'


// Action Types

export const SET_BACKGROUND = 'dots/game/SET_BACKGROUND'


// Action Creators

export function replaceDots(value) {
    return {type: SET_BACKGROUND, value}
}


// Reducer

export default (state = randomColor(), action) => {
    switch (action.type) {
        case SET_BACKGROUND:
            return action.value
        default:
            return state
    }
}
