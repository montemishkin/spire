// local imports
import {setDots} from 'store/ducks/game/dots/items'
import {add, scale, flipX, flipY} from 'util/vector2'


export default (state, dispatch) => {
    dispatch(setDots(movedDots(state)))
}


function movedDots({game, browser}) {
    const dt = game.dt
    const dots = game.dots.items
    const numDots = game.dots.num.value
    const {width, height} = browser

    return [
        ...dots.slice(0, numDots).map(dot => {
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
        }),
        ...dots.slice(numDots),
    ]
}
