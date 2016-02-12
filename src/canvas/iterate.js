// local imports
import {setDots} from 'store/ducks/game/dots/items'
import * as vector2 from 'util/vector2'
import * as vector3 from 'util/vector3'


export default (state, dispatch) => {
    dispatch(setDots(
        state.mouse.isDown
            ? suckedDots(state)
            : movedDots(state)
    ))
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


const movedDots = createDotMapper(state => {
    const width = state.browser.width
    const height = state.browser.height
    const dt = state.game.dt.value

    return dot => {
        let v = dot.v
        v = dot.p[0] - dot.r < 0 || dot.p[0] + dot.r > width
            ? vector2.flipX(v)
            : v
        v = dot.p[1] - dot.r < 0 || dot.p[1] + dot.r > height
            ? vector2.flipY(v)
            : v

        const p = vector2.add(dot.p, vector2.scale(dt, v))

        let cV = dot.cV
        cV = dot.c[0] < 0 || dot.c[0] > 100 ? vector3.flipX(cV) : cV
        cV = dot.c[1] < 0 || dot.c[1] > 100 ? vector3.flipY(cV) : cV
        cV = dot.c[2] < 0 || dot.c[2] > 100 ? vector3.flipZ(cV) : cV

        const c = vector3.add(dot.c, vector3.scale(dt, cV))

        return {
            ...dot,
            p,
            v,
            c,
            cV,
        }
    }
})


const suckedDots = createDotMapper(state => {
    const mouse = [state.mouse.x, state.mouse.y]
    const dt = state.game.dt.value

    return dot => {
        const v = vector2.scale(50, vector2.normalize(
            vector2.subtract(mouse, dot.p)
        ))
        const p = vector2.add(dot.p, vector2.scale(dt, v))

        let cV = dot.cV
        cV = dot.c[0] < 0 || dot.c[0] > 100 ? vector3.flipX(cV) : cV
        cV = dot.c[1] < 0 || dot.c[1] > 100 ? vector3.flipY(cV) : cV
        cV = dot.c[2] < 0 || dot.c[2] > 100 ? vector3.flipZ(cV) : cV

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
