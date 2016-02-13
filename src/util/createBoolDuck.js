export default function createBoolDuck({
    prefix,
    value = false,
}) {
    // Action Types

    const SET = [prefix, 'SET'].join('/')


    // Action Creators

    function set(val) {
        return {type: SET, value: val}
    }


    // Reducer

    function reducer(state = value, action) {
        switch (action.type) {
            case SET:
                return action.value
            default:
                return state
        }
    }


    return {
        set,
        reducer,
    }
}
