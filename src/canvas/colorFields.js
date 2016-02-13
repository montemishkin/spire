// local imports
import * as vector3 from 'util/vector3'


export default [
    // bounce off walls
    (state, dot) => {
        const [r, g, b] = dot.c

        let cV = dot.cV
        cV = r < 0 || r > 100 ? vector3.flipX(cV) : cV
        cV = g < 0 || g > 100 ? vector3.flipY(cV) : cV
        cV = b < 0 || b > 100 ? vector3.flipZ(cV) : cV

        return cV
    },
]
