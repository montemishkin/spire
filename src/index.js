// fix browser land
import 'babel-polyfill'
// third party imports
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
// local imports
import {createStore} from 'store'
import Controller from 'components/Controller'
import runCanvasThingy from 'canvas'


if (process.env.NODE_ENV === 'production') {
    // Google Analytics
    // see: https://developers.google.com/analytics/devguides/collection/analyticsjs/
    /* eslint-disable */
    window.ga = window.ga || function () {
        (ga.q = ga.q || []).push(arguments)
    };
    ga.l = +new Date;
    ga('create', 'UA-68929870-3', 'auto');
    /* eslint-enable */
} else {
    /* eslint-disable */
    window.ga = window.ga || function () {};
    /* eslint-enable */
}

// send a pageview hit to google analytics
ga('send', 'pageview')


const store = createStore()


ReactDOM.render(
    <Provider store={store}>
        <Controller />
    </Provider>,
    document.getElementById('controls')
)


runCanvasThingy(store, document.getElementById('canvas'))
