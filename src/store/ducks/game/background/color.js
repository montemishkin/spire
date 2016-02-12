// local imports
import {randomColor} from 'util/color'


// Action Types

const SET = 'spire/game/background/color/SET'


// Action Creators

export function set(value) {
    return {type: SET, value}
}


// Reducer

export default (state = randomColor(), action) => {
    switch (action.type) {
        case SET:
            return action.value
        default:
            return state
    }
}
