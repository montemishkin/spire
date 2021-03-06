// local imports
import draw from 'canvas/draw'
import iterate from 'canvas/iterate'
import {restart} from 'store/ducks/game'


export default (store, canvas) => {
    resize(canvas)
    window.addEventListener('resize', resize.bind(null, canvas))

    store.dispatch(restart())

    const context = canvas.getContext('2d')

    animate(store, context)
}


function animate(store, context) {
    const state = store.getState()

    if (!state.game.isPaused) {
        draw(state, context)
        iterate(state, store.dispatch)
    }

    requestAnimationFrame(animate.bind(null, store, context))
}


function resize(canvas) {
    canvas.height = window.innerHeight
    canvas.width = window.innerWidth
}
