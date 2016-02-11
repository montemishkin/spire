// third party imports
import React from 'react'
import radium from 'radium'
import {connect} from 'react-redux'
// local imports
import styles from './styles'
import {play, pause} from 'store/ducks/game/isPaused'
import {setNumDots} from 'store/ducks/game/dots'
import Checkbox from 'components/Checkbox'
import Slider from 'components/Slider'


function Controller({
    isPaused,
    maxDots,
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
            <Checkbox
                name='isPaused'
                value={isPaused}
                onChange={() => dispatch(isPaused ? play() : pause())}
            />
            <Slider
                name='numDots'
                min={0}
                max={maxDots}
                value={numDots}
                step={1}
                onChange={(event) => dispatch(setNumDots(event.target.value))}
            />
        </div>
    )
}


function mapStateToProps(state) {
    return {
        isPaused: state.game.isPaused,
        maxDots: state.game.dots.max,
        numDots: state.game.dots.num,
    }
}


export default connect(mapStateToProps)(radium(Controller))
