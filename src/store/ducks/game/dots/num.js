// Action Types

export const SET_NUM_DOTS = 'spire/game/dots/SET_NUM_DOTS'


// Action Creators

export function setNumDots(value) {
    return {type: SET_NUM_DOTS, value}
}


// Reducer

const initialState = {
    min: 0,
    max: 1000,
    step: 1,
    value: 200,
}

export default (state = initialState, {type, value}) => {
    switch (type) {
        case SET_NUM_DOTS:
            return {
                ...state,
                value: value > state.max
                    ? state.max
                    : value < state.min
                        ? state.min
                        : value,
            }
        default:
            return state
    }
}
