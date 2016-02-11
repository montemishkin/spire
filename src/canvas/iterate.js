// local imports
import {replaceDots} from 'store/ducks/game/dots'


export default (state, dispatch) => {
    dispatch(replaceDots(movedDots(state)))
}


function movedDots({game, browser}) {
    const {dots, dt} = game
    const {width, height} = browser

    return [
        ...dots.items.slice(0, dots.num).map(dot => {
            const vX = dot.p[0] < 0 || dot.p[0] > width ? -dot.v[0] : dot.v[0]
            const vY = dot.p[1] < 0 || dot.p[1] > height ? -dot.v[1] : dot.v[1]
            const pX = dot.p[0] + (vX * dt)
            const pY = dot.p[1] + (vY * dt)
            const c = {
                ...dot.c,
                h: dot.c.h + 10,
            }

            return {
                ...dot,
                p: [pX, pY],
                v: [vX, vY],
                c,
            }
        }),
        ...dots.items.slice(dots.num),
    ]
}
