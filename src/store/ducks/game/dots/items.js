// Action Types

export const SET_DOTS = 'spire/game/dots/SET_DOTS'


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
