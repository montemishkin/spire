// local imports
import {setDots} from 'store/ducks/game/dots/items'
import * as vector2 from 'util/vector2'
import * as vector3 from 'util/vector3'
import positionFields from 'canvas/positionFields'
import colorFields from 'canvas/colorFields'


export default (state, dispatch) => {
    dispatch(setDots(flowedDots(state)))
}


function createDotMapper(createMapping = () => x => x) {
    return (state) => {
        const numDots = state.game.dots.num.value
        const dots = state.game.dots.items

        return [
            ...dots.slice(0, numDots).map(createMapping(state)),
            ...dots.slice(numDots),
        ]
    }
}


const flowedDots = createDotMapper(state => {
    const width = state.browser.width
    const height = state.browser.height
    const dt = state.game.dt.value
    const positionField = positionFields[state.game.positionField.value](state)
    const colorField = colorFields[state.game.colorField.value](state)
    const shouldModPosition = state.game.shouldModPosition

    return dot => {
        const v = positionField(dot)

        let p = vector2.add(dot.p, vector2.scale(dt, v))
        if (shouldModPosition) {
            p = vector2.mod(p, [width, height])
        }

        const cV = colorField(dot)
        const c = vector3.add(dot.c, vector3.scale(dt, cV))

        return {
            ...dot,
            v,
            p,
            c,
            cV,
        }
    }
})
