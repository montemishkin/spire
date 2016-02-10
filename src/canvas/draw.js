// local imports
import {toCSS} from 'util/color'


export default (state, context) => {
    clearBackground(state, context)
    drawDots(state, context)
}


function clearBackground({game, browser}, context) {
    const {background} = game
    const {width, height} = browser

    context.fillStyle = toCSS(background)
    context.fillRect(0, 0, width, height)
}


function drawDots({game}, context) {
    const {dots} = game

    dots.forEach(({p, r, c}) => {
        context.fillStyle = toCSS(c)
        context.beginPath()
        context.arc(...p, r, 0, 2 * Math.PI)
        context.fill()
    })
}
