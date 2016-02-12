export default function createRangeDuck({
    prefix,
    min = 0,
    max = 100,
    step = 1,
    value = 0,
}) {
    // Action Types

    const SET = [prefix, 'SET'].join('/')


    // Action Creators

    function set(val) {
        return {type: SET, value: val}
    }


    // Reducer

    const initialState = {min, max, step, value}

    function reducer(state = initialState, action) {
        switch (action.type) {
            case SET:
                return {
                    ...state,
                    value: action.value > state.max
                        ? state.max
                        : action.value < state.min
                            ? state.min
                            : action.value,
                }
            default:
                return state
        }
    }


    // return the duck
    return {
        // action types
        SET,
        // action creators
        set,
        // reducer
        reducer,
    }
}
