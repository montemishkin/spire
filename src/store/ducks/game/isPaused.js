// Action Types

const PLAY = 'spire/game/PLAY'
const PAUSE = 'spire/game/PAUSE'


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
