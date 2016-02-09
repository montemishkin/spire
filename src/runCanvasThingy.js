// local imports
import random from 'util/random'
import {randomColor, toCSS} from 'util/color'

// ---------------------------------------------
// Initialize State
// ---------------------------------------------

const state = {}

state.canvas = document.getElementById('canvas')
state.context = state.canvas.getContext('2d')
state.mouse = {
    x: 0,
    y: 0,
}
state.height = window.innerHeight
state.width = window.innerWidth

state.dt = 0.1
state.background = randomColor()
state.numDots = 1000
state.dots = []

randomize()


// ------------------------------------------------
// Run Scripts
// ------------------------------------------------

document.onmousemove = ({x, y}) => {
    state.mouse = {
        x,
        y,
    }
}

document.onclick = () => {
    randomize()
}

window.onresize = resize

resize()


requestAnimationFrame(animate)


// ----------------------------------------------
// Function Defenitions
// ----------------------------------------------


function randomize() {
    state.background = randomColor()

    state.dots = []

    for (var i = 0; i < state.numDots; i++) {
        state.dots.push({
            p: [state.width / 2, state.height / 2],
            v: [random(-30, 30), random(-30, 30)],
            r: 10,
            c: randomColor(),
        })
    }
}


function clear() {
    const {
        context,
        background,
        width,
        height,
    } = state

    context.fillStyle = toCSS(background)
    context.fillRect(0, 0, width, height)
}


function resize() {
    state.height = window.innerHeight
    state.width = window.innerWidth

    state.canvas.height = state.height
    state.canvas.width = state.width
}


function animate() {
    draw()
    iterate()

    requestAnimationFrame(animate)
}


function draw() {
    const {
        context,
        dots,
    } = state

    clear()

    dots.forEach(({
        p,
        r,
        c,
    }) => {
        context.fillStyle = toCSS(c)
        context.beginPath()
        context.arc(...p, r, 0, 2 * Math.PI)
        context.fill()
    })
}


function iterate() {
    const {
        dots,
        dt,
        width,
        height,
    } = state

    state.dots = dots.map(dot => {
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
    })
}
