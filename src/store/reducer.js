// third party imports
import {combineReducers} from 'redux'
import {createResponsiveStateReducer} from 'redux-responsive'
import {mouseReducer} from 'redux-mouse'


export default combineReducers({
    browser: createResponsiveStateReducer({
        medium: 700,
        small: 400,
    }),
    mouse: mouseReducer,
})
