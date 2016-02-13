// local imports
import * as vector2 from 'util/vector2'


export default [
    // bouce off walls / suck towards mouse
    state => {
        if (state.mouse.isUp) {
            const width = state.browser.width
            const height = state.browser.height

            return dot => {
                const [x, y] = dot.p
                const r = dot.r

                let v = dot.v
                v = x - r < 0 || x + r > width ? vector2.flipX(v) : v
                v = y - r < 0 || y + r > height ? vector2.flipY(v) : v

                return v
            }
        } else {
            const mouse = [state.mouse.x, state.mouse.y]

            return dot => {
                return vector2.scale(50, vector2.normalize(
                    vector2.subtract(mouse, dot.p)
                ))
            }
        }
    },
    // squigle pod flow
    state => {
        const width = state.browser.width
        const height = state.browser.height

        return dot => {
            const [x, y] = dot.p

            return [
                50 * Math.sin(20 * y / height),
                -50 * Math.cos(20 * x / width),
            ]
        }
    },
]
