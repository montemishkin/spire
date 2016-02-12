// third party imports
import React from 'react'
import radium from 'radium'
import {connect} from 'react-redux'
// local imports
import styles from './styles'
import downloadCanvasImage from 'util/downloadCanvasImage'
import {restart} from 'store/ducks/game'
import {play, pause} from 'store/ducks/game/isPaused'
import {set as setDt} from 'store/ducks/game/dt'
import {set as setNumDots} from 'store/ducks/game/dots/num'
import {set as setBgAlpha} from 'store/ducks/game/background/alpha'
import Checkbox from 'components/Checkbox'
import Slider from 'components/Slider'
import Button from 'components/Button'


function Controller({
    isPaused,
    dt,
    numDots,
    bgAlpha,
    dispatch,
    style,
    ...unusedProps,
}) {
    return (
        <div
            {...unusedProps}
            style={[styles.container, style]}
        >
            <Button
                onClick={() => dispatch(restart())}
            >
                restart
            </Button>
            <Checkbox
                name='isPaused'
                value={isPaused}
                onChange={() => dispatch(isPaused ? play() : pause())}
            />
            <Slider
                name='dt'
                {...dt}
                onChange={(event) => dispatch(setDt(event.target.value))}
            />
            <Slider
                {...numDots}
                name='numDots'
                onChange={event => dispatch(setNumDots(event.target.value))}
            />
            <Slider
                {...bgAlpha}
                name='bgAlpha'
                onChange={event => dispatch(setBgAlpha(event.target.value))}
            />
            <Button onClick={downloadCanvasImage}>
                save
            </Button>
        </div>
    )
}


function mapStateToProps(state) {
    return {
        isPaused: state.game.isPaused,
        dt: state.game.dt,
        numDots: state.game.dots.num,
        bgAlpha: state.game.background.alpha,
    }
}


export default connect(mapStateToProps)(radium(Controller))
