// Action Types

export const SET_DT = 'spire/game/SET_DT'


// Action Creators

export function setDT(value) {
    return {type: SET_DT, value}
}


// Reducer

export default (state = 0.1, action) => {
    switch (action.type) {
        case SET_DT:
            return action.value
        default:
            return state
    }
}
