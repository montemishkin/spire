// third party imports
import React from 'react'
import {connect} from 'react-redux'
// local imports
import {play, pause} from 'store/ducks/game/isPaused'
import {setNumDots} from 'store/ducks/game/dots'


function Controller({isPaused, maxDots, numDots, dispatch}) {
    return (
        <span>
            <button
                onClick={() => dispatch(isPaused ? play() : pause())}
            >
                {isPaused ? 'Play' : 'Pause'}
            </button>
            <input
                type='range'
                min='0'
                max={`${maxDots}`}
                value={numDots}
                step='1'
                onChange={(event) => dispatch(setNumDots(event.target.value))}
            />
        </span>
    )
}


function mapStateToProps(state) {
    return {
        isPaused: state.game.isPaused,
        maxDots: state.game.dots.max,
        numDots: state.game.dots.num,
    }
}


export default connect(mapStateToProps)(Controller)
