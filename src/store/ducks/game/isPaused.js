// Action Types

export const PLAY = 'dots/game/PLAY'
export const PAUSE = 'dots/game/PAUSE'


// Action Creators

export function play() {
    return {type: PLAY}
}


export function pause() {
    return {type: PAUSE}
}


// Reducer

export default (state = false, action) => {
    switch (action.type) {
        case PAUSE:
            return true
        case PLAY:
            return false
        default:
            return state
    }
}
