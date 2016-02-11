// third party imports
import {combineReducers} from 'redux'
// local imports
import num from './num'
import items, {setDots} from './items'
import {randomColor} from 'util/color'
import random from 'util/random'


// Action Creators

export function randomizeDots() {
    return (dispatch, getState) => {
        const state = getState()

        const maxNumDots = state.game.dots.num.max
        const width = state.browser.width
        const height = state.browser.height

        const dots = []

        for (let i = 0; i < maxNumDots; i++) {
            dots.push({
                p: [width / 2, height / 2],
                v: [random(-30, 30), random(-30, 30)],
                r: random(5, 20),
                c: randomColor(),
            })
        }

        dispatch(setDots(dots))
    }
}


// Reducer

export default combineReducers({
    num,
    items,
})
