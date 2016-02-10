// third party imports
import React from 'react'
import {connect} from 'react-redux'
// local imports
import {play, pause} from 'store/ducks/game'


function Controller({isPaused, dispatch}) {
    return (
        <span>
            <button
                onClick={() => dispatch(isPaused ? play() : pause())}
            >
                {isPaused ? 'Play' : 'Pause'}
            </button>
        </span>
    )
}


function mapStateToProps(state) {
    return {isPaused: state.game.isPaused}
}


export default connect(mapStateToProps)(Controller)
