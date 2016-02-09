// third party imports
import {combineReducers} from 'redux'
import {createResponsiveStateReducer} from 'redux-responsive'


export default combineReducers({
    browser: createResponsiveStateReducer({
        medium: 700,
        small: 400,
    }),
})
