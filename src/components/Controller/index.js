// third party imports
import React from 'react'
import radium from 'radium'
import {connect} from 'react-redux'
// local imports
import styles from './styles'
import {restart} from 'store/ducks/game'
import {play, pause} from 'store/ducks/game/isPaused'
import {setDT} from 'store/ducks/game/dt'
import {setNumDots} from 'store/ducks/game/dots/num'
import Checkbox from 'components/Checkbox'
import Slider from 'components/Slider'
import Button from 'components/Button'


function Controller({
    isPaused,
    dt,
    numDots,
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
                min={0}
                max={2}
                value={dt}
                step={0.001}
                onChange={(event) => dispatch(setDT(event.target.value))}
            />
            <Slider
                {...numDots}
                name='numDots'
                onChange={(event) => dispatch(setNumDots(event.target.value))}
            />
        </div>
    )
}


function mapStateToProps(state) {
    return {
        isPaused: state.game.isPaused,
        dt: state.game.dt,
        numDots: state.game.dots.num,
    }
}


export default connect(mapStateToProps)(radium(Controller))
