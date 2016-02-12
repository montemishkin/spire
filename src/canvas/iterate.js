// local imports
import {setDots} from 'store/ducks/game/dots/items'
import {add, subtract, scale, normalize, flipX, flipY} from 'util/vector2'


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
        v = dot.p[0] < 0 || dot.p[0] > width
            ? flipX(v)
            : v
        v = dot.p[1] < 0 || dot.p[1] > height
            ? flipY(v)
            : v

        const p = add(dot.p, scale(dt, v))
        const c = {
            ...dot.c,
            h: dot.c.h + 3,
        }

        return {
            ...dot,
            p,
            v,
            c,
        }
    }
})


const suckedDots = createDotMapper(state => {
    const mouse = [state.mouse.x, state.mouse.y]
    const dt = state.game.dt.value

    return dot => {
        const v = scale(50, normalize(subtract(mouse, dot.p)))
        const p = add(dot.p, scale(dt, v))
        const c = {
            ...dot.c,
            h: dot.c.h + 3,
        }

        return {
            ...dot,
            v,
            p,
            c,
        }
    }
})
