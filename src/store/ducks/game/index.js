// third party imports
import {combineReducers} from 'redux'
// local imports
import isPaused from './isPaused'
import dt from './dt'
import background from './background'
import dots, {randomizeDots} from './dots'


// Action Creators

export function restart() {
    return (dispatch) => {
        dispatch(randomizeDots())
    }
}


// Reducer

export default combineReducers({
    isPaused,
    dt,
    background,
    dots,
})
