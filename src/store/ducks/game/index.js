// third party imports
import {combineReducers} from 'redux'
// local imports
import isPaused from './isPaused'
import dt from './dt'
import background from './background'
import dots from './dots'


export default combineReducers({
    isPaused,
    dt,
    background,
    dots,
})
