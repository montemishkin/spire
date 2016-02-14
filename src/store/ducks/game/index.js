// third party imports
import {combineReducers} from 'redux'
// local imports
import isPaused from './isPaused'
import shouldModPosition from './shouldModPosition'
import shouldRandomizePosition from './shouldRandomizePosition'
import dt from './dt'
import background from './background'
import dots, {randomizeDots} from './dots'
import colorField from './colorField'
import positionField from './positionField'


// Action Creators

export function restart() {
    return (dispatch) => {
        dispatch(randomizeDots())
    }
}


// Reducer

export default combineReducers({
    isPaused,
    shouldModPosition,
    shouldRandomizePosition,
    dt,
    background,
    dots,
    colorField,
    positionField,
})
