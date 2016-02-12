// Action Types

const SET_DOTS = 'spire/game/dots/items/SET'


// Action Creators

export function setDots(dots) {
    return {type: SET_DOTS, dots}
}


// Reducer

export default (state = [], action) => {
    switch (action.type) {
        case SET_DOTS:
            return action.dots
        default:
            return state
    }
}
